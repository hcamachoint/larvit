 npm install --save-dev react react-dom react-router-dom @babel/plugin-transform-react-jsx @vitejs/plugin-react

 nano vite.config.js
    import react from '@vitejs/plugin-react';

    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react({
            babel: {
                babelrc: true,
            },
        }),
    ],

nano resources/views/app.blade.php
    <!DOCTYPE html>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SPA Laravel + React + Vite</title>
        @viteReactRefresh 
        @vite('resources/js/app.jsx')
    </head>
    <body>
        <div id="app"></div>
    </body>
    </html>

nano routes/web.php
    Route::get('/{any?}', function () {
        return view('app');
    })->where('any', '.*');