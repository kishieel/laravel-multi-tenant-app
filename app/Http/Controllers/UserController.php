<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $2y$12$/.okPItuF8SSnG1q8XtKWeJqZxnBay4eQeh7zzF4qf6NvRTrgOkNK
        $users = User::all();
        return response()->json($users, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Acolyte  $acolyte
     * @return \Illuminate\Http\Response
     */
    public function show(Acolyte $acolyte)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Acolyte  $acolyte
     * @return \Illuminate\Http\Response
     */
    public function edit(Acolyte $acolyte)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Acolyte  $acolyte
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Acolyte $acolyte)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Acolyte  $acolyte
     * @return \Illuminate\Http\Response
     */
    public function destroy(Acolyte $acolyte)
    {
        //
    }
}
