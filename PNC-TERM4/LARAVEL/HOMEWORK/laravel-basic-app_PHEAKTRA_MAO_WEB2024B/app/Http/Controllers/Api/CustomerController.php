<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $customer = Customer::all();
        return $customer;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $customer = Customer::create([
            'name' => $request->name,
            'age' =>$request->age,
            'gender' =>$request->gender,
            'email' => $request->email,
            'phone' => $request->phone
        ]);
        return "Customer created successfully";
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $customer = Customer::find($id);
        return $customer;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $customer = Customer::find($id)->update(
            [
                'name' => $request->name,
                'age' =>$request->age,
                'gender' =>$request->gender,
                'email' => $request->email,
                'phone' => $request->phone,
            ]
            );
            return "Customer updated successfully";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $customer = Customer::find($id);
        $customer = $customer->delete();
        return "Customer deleted successfully";
    }
}
