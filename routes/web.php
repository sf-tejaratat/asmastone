<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes(['register' => false]);
// Route::get('/event', 'HomeController@event');
Route::middleware('auth')->get('/admin/order', 'AdminordersController@index');
Route::get('/404', 'HomeController@notFound');
Route::post('/order', 'AdminordersController@setOrder');

Route::get('/{any}', 'HomeController@index')->where('any', '.*');
