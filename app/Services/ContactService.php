<?php
namespace App\Services;

use App\Contracts\ContactInterface;
use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactService implements ContactInterface {
    public function validation(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "username" => "required|max:125",
            "email" => "required|max:255|email",
            "message" => "required|max:255"
        ]);

        if ($validator->fails()) {
            return ['errors' => $validator->errors()->toArray()];
        }

        return $validator->validated();
    }

    public function sendEmail($validatedData)
    {
        Mail::to("jeanbarronalokpon@gmail.com")
            ->send(new ContactFormMail($validatedData));
    }
}
