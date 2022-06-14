<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    /**
     * Return pets list
     *
     * @return Collection
     */
    public function index() 
    {
        return Pet::get();
    }
}
