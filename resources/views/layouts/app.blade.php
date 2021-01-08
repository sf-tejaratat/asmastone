<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="imagetoolbar" content="no">
    <meta name="viewport" content="initial-scale=1.0,minimum-scale=1,maximum-scale=5">
    <meta name="format-detection" content="telephone=no">
    <title>7 STONES</title>
    <meta name="author" content="https://7stones.ir">
    <meta name="copyright" content="7 STONES">
    <meta name="description" content="طراحی پلن های ساختمانی با معماری مدرن با کیفیت مثال زدنی">
    <meta name="keywords" content="7stones,طراحی ساختمان,مشاور ساخت,پیمانکاری ساختمان,نیاوران,ولنجک,لواسان,اقدسیه,قیطریه"/>
    {{-- <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png"> --}}
    {{-- <link rel="manifest" href="/assets/favicons/site.webmanifest"> --}}
    {{-- <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#252525"> --}}
    <meta name="msapplication-TileColor" content="#252525">
    <meta name="theme-color" content="#ffffff">
    <meta property="og:title" content="7 STONES">
    <meta property="og:type" content="website">

    <meta property="og:url" content="">
    <meta property="og:description" content="طراحی پلن های ساختمانی با معماری مدرن با کیفیت مثال زدنی">


    <title>{{ config('app.name', '7Stones') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js?version=3') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    {{-- <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> --}}

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="/css/bundle.css?version=3 ">
    {{-- <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  /> --}}
    <script src="js/vendor.bundle.js" defer></script>
    <script src="js/app.bundle.js" defer></script>
    {{-- <script src="js/service-worker.js" defer></script> --}}
</head>

<style>

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

<body class="font-sans antialiased is-ready">

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
