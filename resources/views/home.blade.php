@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @auth
            <div class="col-md-8" id="root"></div>
        @endauth
    </div>
</div>
@endsection
