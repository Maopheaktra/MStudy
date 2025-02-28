<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['name', 'description'];

    public static function list(){
        $data = self::all();
        return $data;
    }

    public static function store($request, $id = null){
        $data = $request->only('name', 'description');
        $data = self::updateOrCreate(['id'=>$id],$data);
        //
         return $data;
    }
    
    public static function destroy($id)
    {
        $data = self::find($id);
        $data->delete();
        return $data;
    }
}
