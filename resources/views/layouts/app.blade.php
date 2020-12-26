<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    {{-- <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> --}}

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="/css/bundle.css ">
    {{-- <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  /> --}}
    <script src="js/vendor.bundle.js" defer></script>
    <script src="js/app.bundle.js" defer></script>
    {{-- <script src="js/service-worker.js" defer></script> --}}
</head>

<style>
     .yekan-regular{
        font-family: yekan-regular;
    }
    .st-logo {
        fill: #FFFFFF;
    }

    .st-logo-load {
        fill: #666;
    }
    .st-logo-load-back {
        fill: #fff;
        }
    a {
        color: inherit !important;
        text-decoration: none;
    }
</style>

<body class="font-sans antialiased is-ready yekan-regular">

    <div id="app">
        @yield('content')
    </div>

    <script>
        if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
    </script>
</body>



</html>
