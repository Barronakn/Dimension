<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class IntroController extends Controller
{
    public function index() {
        return Inertia::render("Intro");
    }
}
