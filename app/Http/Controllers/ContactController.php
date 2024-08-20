<?php

namespace App\Http\Controllers;

use App\Contracts\ContactInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ContactController extends Controller
{
    public $contactInterface;

    public function __construct(ContactInterface $contactInterface) {
        $this->contactInterface = $contactInterface;
    }

    public function validateData(Request $request)
    {
        $validatedData = $this->contactInterface->validation($request);

        if (isset($validatedData['errors'])) {
            return Redirect::back()->withErrors($validatedData['errors'])->withInput();
        }

        $this->contactInterface->sendEmail($validatedData);
        return Redirect::back()->with('success', 'Message envoyé avec succès !');
    }

    public function index() {
        return Inertia::render("Contact");
    }
}
