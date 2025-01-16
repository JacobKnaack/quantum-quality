<?php

namespace Tests\Unit;

use App\Models\Document;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DocumentTest extends TestCase
{
    use RefreshDatabase;

    public function test_database_can_create_document(): void
    {
        $user = User::factory()->create();

        $document = new Document([
            'title' => 'Test Document',
            'content' => 'Content string.',
            'user_id' => $user->id,
        ]);

        $document->save();

        $this->assertDatabaseHas('documents', [
            'title' => 'Test Document',
            'user_id' => $user->id,
        ]);
    }
}
