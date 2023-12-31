<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

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


Route::prefix('students')->group(function () {
    Route::get('/',[StudentController::class,'index']);
    Route::get('/{id}',[StudentController::class,'show']);
    Route::post('/add',[StudentController::class,'store']);
    Route::get('/edit/{id}',[StudentController::class,'edit']);
    Route::put('/edit/{id}',[StudentController::class,'update']);
    Route::delete('/delete/{id}',[StudentController::class,'destroy']);
});





// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
