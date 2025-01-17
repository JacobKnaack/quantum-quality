<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/upload', function() {
    return view('upload');
})->name('upload');

Route::post('/json', function (Request $request) {
    if ($request->hasFile('json_file')) {
        $file = $request->file('json_file');

        // TODO: store file somewhere for later reference
        // $originalFilename = $file->getClientOriginalName();

        // $uniqueFileName = uniqid() . '_' . $originalFileName;

        $jsonContent = File::get($file->getRealPath());

        $prettyJson = json_encode(json_decode($jsonContent), JSON_PRETTY_PRINT);

       return view('json', ['json' => $prettyJson]);
    }

    return redirect()->back()->with('error', 'No File uploaded');
})->name('json');
