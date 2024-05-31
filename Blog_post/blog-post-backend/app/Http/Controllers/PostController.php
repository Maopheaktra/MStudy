<?php

namespace App\Http\Controllers;

use App\Http\Requests\ShowPostRequest;
use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
use App\Http\Resources\ShowPostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $post = Post::all();
        $post = PostResource::collection($post);
        return $post;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        Post::store($request);
        return response()->json([
           'success'=>true,
           'message'=>'Post created successfully'
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $post, $id)
    {
        //
        $post = Post::find($id);
        $post = new ShowPostResource($post);
        return $post;
       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        Post::store($request, $id);
        return response()->json(
            [
                "success" => true,
                "data" => true,
                "message" => "Post updated successfully"
            ]
            );
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $post = Post::find($id);
        $post->delete();
        return response()->json([
            "success" => true,
            "data" => true,
            "message" => "Post deleted successfully"
        ],200);
    }
}