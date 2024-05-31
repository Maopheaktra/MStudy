<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ShowCategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $category = Category::list();
        $category = CategoryResource::collection($category);
        return response()->json([
            'success' => true,
            'data'=>$category
        ]);
        return $category;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $category = Category::store($request);
        return response()->json([
            'success' => true,
            'data'=>$category,
            'message' => 'Category created successfully'
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        // dd(1);
        $category = Category::find($id);
        $category =new ShowCategoryResource($category);
        return response()->json([
           'success' => true,
            'data'=>$category
        ],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $category = Category::store($request,$id);
        return response()->json([
           'success' => true,
            'data'=>true,
           'message' => 'Category updated successfully'
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $category = Category::destroy($id);
        return response()->json([
           'success' => true,
            'data'=>true,
           'message' => 'Category deleted successfully'
        ],200);
    }
}
