<?php

namespace App\Providers;

use App\Contracts\ContactInterface;
use App\Services\ContactService;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Inertia::share('app', [
            'name' => config('app.name'),
            'url' => config('app.url'),
        ]);

        $this->app->singleton(ContactInterface::class, ContactService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
