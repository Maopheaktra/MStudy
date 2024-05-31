<?php

use App\Http\Controllers\Api\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//  /students/list
Route::get('/student/list', [StudentController::class,'index'])->name('students.list');
Route::post('/student/create', [StudentController::class,'store'])->name('students.create');
Route::get('/student/show/{id}', [StudentController::class,'show'])->name('students.show');
Route::delete('/student/delete/{id}', [StudentController::class,'destroy'])->name('students.delete');
Route::put('/student/update/{id}', [StudentController::class,'update'])->name('students.update');