<?php

namespace App\Http\Controllers;

use App\Models\Adoption;
use Illuminate\Http\Request;

class AdoptionController extends Controller
{
    /**
     * Create new adoption
     *
     * @param Request $request
     * @return Adoption
     */
    public function store(Request $request) 
    {
        $request->validate([
            'email'  => ['required', 'email'],
            'price'  => ['required', 'numeric', 'between:10,100'],
            'pet_id' => ['required', 'int', 'exists:pets,id']
        ]);

        $data = $request->all();

        return Adoption::create($data);
    }
}
