<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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

// Route::get('/user', function(){
//     return ('User page!!!');
// });

// Route::get('/about', function(){
//     return ('About page!!!');
// });

// Route::get('/user',[UserController::class,'index']);
Route::get('/user', [UserController::class,'index']);
Route::get('/about', [AboutController::class,'about']);
Route::get('/client',[ClientController::class,'index']);
Route::get('/checkClient',[ClientController::class,'isclient']);