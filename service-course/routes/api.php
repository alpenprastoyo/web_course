<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('mentors','MentorController@create');
Route::put('mentors/{id}','MentorController@update');
Route::delete('mentors/{id}','MentorController@destroy');
Route::get('mentors','MentorController@index');
Route::get('mentors/{id}','MentorController@show');

Route::post('courses','CourseController@create');
Route::put('courses/{id}','CourseController@update');
Route::get('courses','CourseController@index');
Route::delete('courses/{id}','CourseController@destroy');

Route::post('chapters','ChapterController@create');
Route::put('chapters/{id}','ChapterController@update');
Route::get('chapters','ChapterController@index');
Route::get('chapters/{id}','ChapterController@show');
Route::delete('chapters/{id}','ChapterController@destroy');








