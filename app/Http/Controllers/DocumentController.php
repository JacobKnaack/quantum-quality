<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DocumentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Display a listing of Documents.
     */
    public function index()
    {
        $documents = Auth::user()->documents;
        return response()->json($documents);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string',
            'content' => 'required',
        ]);

        $validatedData['user_id'] = Auth::id();

        $document = Document::create($validatedData);

        return response()->json($document, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        $this->authorize('view', document);

        return reponse()->json($document);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Document $document)
    {
        $this->authorize('update', $document);

        $validatedData = $request->validate([
            'title' => 'string',
            'content' => 'string',
        ]);

        $document->update($validatedData);

        return response()->json($document);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        $this->authorize('delete', $document);

        $document->delete();

        return response()-> json(null, 204);
    }
}
