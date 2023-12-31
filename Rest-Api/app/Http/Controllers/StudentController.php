<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Student::get();
        return $data;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required',
            'roll' => 'required',
            'email' => 'required',
        ]);

        $data = Student::create($request->all());
        return response([
            'status' => true,
            'message' => 'Student added successfull.!',
            'type'=> 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Student::where('id',$id)->first();
        if(!$data){
            return response([
                'message' => 'Not Found Any Data'
            ]);
        }else{
            return $data;
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
         $data = Student::where('id',$id)->first();
        if (!$data) {
            return response([
                'error'=> "Unable to update Data!"
            ]);
        }else {
            return response([
                'userData'=> $data
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = Student::where('id',$id)->first();
        if (!$data->update($request->all())) {
            return response([
                'error'=> "Unable to update Data!"
            ]);
        }else {
            return response([
                'message'=> "Data updated successfull!"
            ]);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
      $data = Student::where('id',$id)->first();
        if (!$data->delete()) {
            return response([
                'error'=> "Unable to delete Data!"
            ]);
        }else {
            return response([
                'message'=> "Data deleted successfull!"
            ]);
        }
    }
}
