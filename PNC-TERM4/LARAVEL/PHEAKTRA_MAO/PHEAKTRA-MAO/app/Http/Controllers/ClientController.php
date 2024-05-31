<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index(){
        return ('Welcome to client page');
    }
    public function isClient(){
        return ('Hey I am a client');
    }
}
