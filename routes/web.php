<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;
use App\Models\Document;

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
Route::get('/upload', [App\Http\Controllers\UploadController::class, 'index'])->name('upload');
// Route::get('/json/{id}', ); how can we fetch documents from the Document controller first?

Route::post('/json', function (Request $request) {
    if ($request->hasFile('json_file')) {
        $file = $request->file('json_file');
        $jsonContent = File::get($file->getRealPath());

        try {
            $data = json_decode($jsonContent, true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                return back()->with('error', 'Invalid JSON file');
            }

            $title = $file->getClientOriginalName();
            $content = json_encode($data, JSON_PRETTY_PRINT);

            $validatedData = [
                'title' => $title,
                'content' => $content,
                'user_id' => Auth::id(),
            ];
    
            $document = Document::create($validatedData);
    
           return view('json', ['json' => $content]);
        } catch (\Exception $e) {
            return back()->with('error', 'Error processing file; ' . $e);
        }
    }

    return redirect()->back()->with('error', 'No File uploaded');
})->name('json');
