@extends('layouts.app')

@section('content')
<header>
    <h1>Uploaded JSON File</h1>
</header>
<main>
    <div id="root"></div>
</main>
<script>
    window.jsonData = @json($json);
</script>
@endsection