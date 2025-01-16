<?php

namespace Tests\Feature;

use App\Models\Document;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DocumentControllerTest extends TestCase
{

    use RefreshDatabase;

    public function test_guest_cannot_create_document(): void
    {
        $response = $this->postJson('/api/document');

        $response->assertUnauthorized();
    }

    public function test_authenticated_user_can_create_document(): void
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->postJson('/api/document', [
            'title' => 'Controller test document',
            'content' => 'test document content',
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('documents', [
            'title' => 'Controller test document',
            'user_id' => $user->id,
        ]);
    }

    public function test_authenticated_user_can_view_documents(): void
    {
        $response = $this->getJson('/api/document');
        $response->assertUnauthorized();
    }

    public function test_authenticated_user_can_view_their_documents()
    {
        $user = User::factory()->create();
        $document = Document::factory()->create(['user_id' => $user->id]); 
        $this->actingAs($user);

        $response = $this->getJson('/api/document');
        $response->assertStatus(200);
        $response->assertJsonCount(1); // Assuming the user has only one document
        $response->assertJsonPath(0, ['id' => $document->id]);
    }

    public function test_guest_cannot_view_document(): void
    {
        $document = Document::factory()->create();
        $response = $this->getJson('/api/document' . $document->id);
        $response->assertUnauthorized();
    }
}
