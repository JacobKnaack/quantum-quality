@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h1 class="">Upload Files</h1>
    <form action="{{ route('json') }}" method="POST" enctype="multipart/form-data" class="mb-3">
        @csrf
        <div class="input-group">
            <input type="file" name="json_file" accept=".json" class="form-control">
            <button type="submit" class="btn btn-primary">Upload</button>
        </div>
    </form>
</div>
@endsection