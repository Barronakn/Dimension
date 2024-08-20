<?php
namespace App\Contracts;

use Illuminate\Http\Request;

interface ContactInterface {
    public function validation (Request $request);

    public function sendEmail ($validatedData);
}
