
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', '7Stones') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    {{-- <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> --}}
    {{-- <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script> --}}
    <script src="/js/jquery3.5.min.js" ></script>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    {{-- <link rel="stylesheet" href="/css/bundle.css "> --}}
    {{-- <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  /> --}}

    {{-- <script src="js/service-worker.js" defer></script> --}}
</head>

<style>

    a {
        color: inherit !important;
        text-decoration: none;
    }
</style>

<body class="font-sans antialiased  yekan-regular max-h-screen overflow-hidden">

    <div id="app" class="flex flex-col justify-center items-center h-screen w-full overflow-hidden bg-gray-200" >

        <div class="w-full py-4 text-gray-700 text-center text-3xl">
            you are offline now !
        </div>
        <a href="/" class="rounded-md bg-yellow-300  py-3 px-10 mt-10 mx-auto border-2 border-yellow-400 shadow-lg transition-color hover:bg-yellow-400  duration-200">
            back to home
        </a>

    </div>


    <script>


    </script>


</body>



</html>





