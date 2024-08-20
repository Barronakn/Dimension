<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class WorkController extends Controller
{
    public function index() {
        return Inertia::render("Work");
    }
}
