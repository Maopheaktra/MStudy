<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use finfo;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $user = User::all();
        return $user;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $user = User::create([
            'name' => $request->name,
            'age'=> $request->age,
            'province' => $request->province,
            'email' => $request->email,
        ]);
        return "create successful";
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::find($id);
        return $user;
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        if ($user = User::find($id) ==false ){
            # code...
            return "find User to update with id " . $id;
        }
        $user = User::find($id);
        $user = $user->update([
            'name'=>$request->name,
            'age'=>$request->age,
            'province'=>$request->province,
            'email'=>$request->email
        ]);
        return "update successful";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        if($user = User::find($id) ==false){
            return "delete failed";
        }else{

            $user = User::find($id);
            $user = $user->delete();
            return "delete successful";
        }
        
    }
}
