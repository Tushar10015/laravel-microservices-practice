<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

Route::post('/login', function (Request $request) {
    $response = Http::post('http://auth-service/api/login', $request->all());
    return response($response->body(), $response->status());
});

Route::post('/register', function (Request $request) {
    $response = Http::post('http://auth-service/api/register', $request->all());
    return response($response->body(), $response->status());
});
