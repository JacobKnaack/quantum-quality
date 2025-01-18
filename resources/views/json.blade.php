@extends('layouts.app')

@section('content')
<div id="uploaded-json" class="container">
    <header class="">
        <h1>Uploaded JSON File</h1>
    </header>
    <section>
        <div id="root"></div>
    </section>
    <script>
        window.jsonData = @json($json);
    </script>
</div>
@endsection