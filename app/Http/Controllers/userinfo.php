<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;

class userinfo extends Controller
{
    public function busca()
    {

        $userId = Auth::user()->id;
        return response()->json($userId);
    }
}
