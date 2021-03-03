<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>7Stones Event</title>

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
    <script src="{{ asset('js/smooth-scroll.min.js') }}" ></script>
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
    * { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
    @font-face {
           font-family: 'yekan-regular';
           src: url('/fonts/ttf/iranyekanwebregular.ttf') format('truetype');
           /* src: url('/fonts/Yekan.ttf') format('truetype'); */
    }

    .yekan-regular{
       font-family: yekan-regular;
   }}
</style>

<body class="font-sans antialiased  yekan-regular " >

    <div id="app" class="flex flex-col justify-start items-center w-full "  style="background:url('/images/event.jpg');background-size: cover;">
        <div class="flex flex-row w-full justifiy-center">
            <div class="flex mx-auto relative">
                <a href="/">
                    <svg id="logo" class="p-header__logo js-logo w-32 lg:w-40 mt-20" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 684.62 320.15" style="enable-background:new 0 0 684.62 320.15;" xml:space="preserve">
                        <g >
                            <g >
                                <path class="js-st-logo st-logo" d="M242.4 102.22V3.4c0-3.64-.32-3.39 3.35-3.39h84C333.17 0 333-.21 333 3.28v105.78c0 4.14-.4 3.71 3.74 3.72h101.25c3.91 0 3.56-.4 3.57 3.66v84.67c0 3.47.23 3.24-3.26 3.24H245.6c-3.48 0-3.2.18-3.2-3.3zM0 102.23V3.4C0-.25-.3 0 3.35 0h83.5c3.59 0 3.31-.28 3.32 3.42v197.66c0 3.48.25 3.27-3.23 3.27H3.2c-3.48 0-3.19.16-3.19-3.3Q0 151.64 0 102.23zM109 102.24V3.66c0-4-.33-3.65 3.58-3.65h83.26c3.6 0 3.52-.41 3.52 3.51v197.4c0 3.77 0 3.43-3.37 3.43h-83.75c-3.26 0-3.26 0-3.26-3.29zM584.82 204.35h-96.24c-3.75 0-3.46.36-3.47-3.52v-84.7c0-3.71-.2-3.35 3.39-3.35h192.72c3.38 0 3.4-.39 3.4 3.4v84.93c0 3.61-.08 3.24-3.32 3.24z"/>
                                <path class="js-st-logo st-logo" d="M351 46.08V4.34 2.67c0-2.64 0-2.66 2.66-2.66h86.37c1 0 1.5.39 1.47 1.41V89c0 3.46.25 3.25-3.25 3.25h-84.18c-3 0-3.05 0-3.05-3Q351 67.66 351 46.08zM485.11 46V4.32 2.4c0-2.36 0-2.39 2.43-2.39H574.36a1 1 0 011 1.06v88.72c0 2.36 0 2.39-2.42 2.39H486.12a1 1 0 01-1-1.06c0-.72-.05-1.44-.05-2.16zM594.24 46.1V2.94c0-2.92 0-2.93 2.85-2.93h85.38c2 .07 2.08.13 2.15 2.25V88.58c0 4.06.16 3.64-3.61 3.64h-83.23c-3.89 0-3.53.3-3.53-3.44q-.03-21.34-.01-42.68z"/>
                                <path class="js-st-logo st-logo" d="M20.72 282.1V277h27.8v4.1a59.06 59.06 0 00-8.13 11.6 70.73 70.73 0 00-6.22 14.88 55.49 55.49 0 00-2 11.81h-5.45a52.8 52.8 0 012-12.25 64.49 64.49 0 015.46-13.84 59.3 59.3 0 017.57-11.23zM113.94 305.62l5.36-.47a11.9 11.9 0 001.78 5.29 9.57 9.57 0 004.32 3.34 16.34 16.34 0 006.59 1.27 15.88 15.88 0 005.74-1 8 8 0 003.71-2.65 6.17 6.17 0 001.21-3.68 5.6 5.6 0 00-1.17-3.53 8.6 8.6 0 00-3.87-2.53 75.57 75.57 0 00-7.64-2.1 39.08 39.08 0 01-8.29-2.68 11.66 11.66 0 01-4.59-4 9.76 9.76 0 01-1.51-5.35 10.9 10.9 0 011.85-6.07 11.44 11.44 0 015.39-4.3 20.56 20.56 0 017.88-1.46 21.44 21.44 0 018.42 1.54 12.13 12.13 0 015.61 4.52 13 13 0 012.11 6.77l-5.45.41a8.77 8.77 0 00-3-6.15q-2.53-2.08-7.49-2.08c-3.43 0-5.94.63-7.51 1.89a5.68 5.68 0 00-2.36 4.55 4.88 4.88 0 001.67 3.81q1.63 1.5 8.57 3.06a57.37 57.37 0 019.51 2.74 13.1 13.1 0 015.53 4.38 10.7 10.7 0 011.79 6.11 11.65 11.65 0 01-2 6.46 13 13 0 01-5.64 4.72 19.69 19.69 0 01-8.28 1.68 24.61 24.61 0 01-9.77-1.7 13.59 13.59 0 01-6.18-5.11 14.54 14.54 0 01-2.29-7.68zM226.82 319.42v-37.88h-14.15v-5.07h34.05v5.07h-14.21v37.88zM309.73 298.5q0-10.69 5.74-16.74a19.54 19.54 0 0114.83-6.05 20.6 20.6 0 0110.7 2.84 18.62 18.62 0 017.28 7.93 25.7 25.7 0 012.53 11.52 25.25 25.25 0 01-2.64 11.69 18 18 0 01-7.47 7.81 21.31 21.31 0 01-10.43 2.65 20.25 20.25 0 01-10.84-2.93 18.86 18.86 0 01-7.24-8 24.21 24.21 0 01-2.46-10.72zm5.86.09q0 7.77 4.18 12.23a14.56 14.56 0 0021 0Q345 306.27 345 298a22 22 0 00-1.77-9.15 13.66 13.66 0 00-5.19-6.06 14 14 0 00-7.66-2.16 14.51 14.51 0 00-10.39 4.15q-4.4 4.11-4.4 13.81zM418.07 319.42v-42.95h5.83l22.56 33.72v-33.72h5.45v42.95h-5.83l-22.56-33.75v33.75zM521.58 319.42v-42.95h31v5.07h-25.32v13.15H551v5h-23.74v14.62h26.37v5.07zM631.55 305.62l5.36-.47a11.78 11.78 0 001.77 5.29 9.68 9.68 0 004.32 3.34 16.38 16.38 0 006.59 1.27 15.93 15.93 0 005.75-1 8 8 0 003.7-2.65 6.18 6.18 0 001.22-3.68 5.6 5.6 0 00-1.17-3.53 8.6 8.6 0 00-3.87-2.53 75.23 75.23 0 00-7.65-2.1 39.28 39.28 0 01-8.29-2.68 11.56 11.56 0 01-4.58-4 9.76 9.76 0 01-1.51-5.35 10.89 10.89 0 011.81-6.03 11.44 11.44 0 015.39-4.3 20.61 20.61 0 017.89-1.46 21.44 21.44 0 018.42 1.54 12.13 12.13 0 015.61 4.52 13 13 0 012.11 6.77L659 289a8.77 8.77 0 00-3-6.15c-1.68-1.39-4.18-2.08-7.48-2.08s-5.94.63-7.52 1.89a5.66 5.66 0 00-2.35 4.55 4.85 4.85 0 001.67 3.81q1.63 1.5 8.57 3.06a57.48 57.48 0 019.5 2.74 13.14 13.14 0 015.54 4.38 10.7 10.7 0 011.79 6.11 11.66 11.66 0 01-2 6.46 12.89 12.89 0 01-5.64 4.72 19.68 19.68 0 01-8.27 1.68 24.55 24.55 0 01-9.77-1.7 13.59 13.59 0 01-6.18-5.11 14.45 14.45 0 01-2.31-7.74z"/>
                            </g>
                        </g>
                    </svg>
                </a>
                <svg class="w-14 lg:w-20 absolute bottom-1 -right-20 lg:-right-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.44 267.91">
                   <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                        <path  fill="#eee" d="M134.22 8.54L151.07 0l14.21 12.46 18.45-4.08 10.65 15.6 18.89.64 6.44 17.76 18.13 5.32 1.83 18.8 16.23 9.66-2.9 18.67 13.32 13.39-7.46 17.36 9.58 16.29-11.54 14.96 5.22 18.15-14.9 11.62.55 18.88-17.32 7.55-4.17 18.43-18.65 3-8.62 16.81-18.82-1.73-12.53 14.14-17.79-6.35-15.65 10.58-15.65-10.58-17.8 6.35-12.53-14.14-18.81 1.73-8.62-16.81-18.65-3-4.17-18.43-17.32-7.55.55-18.88-14.9-11.62 5.22-18.15L0 141.87l9.58-16.29-7.46-17.36 13.32-13.39-2.91-18.67 16.24-9.66 1.83-18.8 18.13-5.32 6.44-17.76 18.88-.64 10.66-15.6 18.45 4.08L117.36 0l16.86 8.54z"/>
                        <path fill="#272892" d="M78.81 178.52l1.68 5.38L52.16 194q-3.39-11.09-8.09-24.23-4.41-12.36-8.24-21.54l26.57-9.49 1.6 5.36q-9.81 3-20.64 6.89 2.15 5.37 5.46 14.66 9.36-3.35 16.52-6.37l1.86 5.24q-7.9 2.46-16.77 5.63 3.22 9 6.36 16.83 11.66-4.17 22.02-8.46zM106.17 123.14q1 2.92-.72 26t-.7 26.09l-4.57 1.63q-1-2.72-16.5-19.75t-16.6-20l6.68-2.38q1 2.74 13.36 17.24t13.26 16.93l.35-.12q-1-2.74-.36-21.45t-.53-21.91zM156.15 150.92l1.68 5.39-28.33 10.11q-3.41-11.08-8.09-24.22-4.41-12.37-8.24-21.55l26.57-9.49 1.59 5.34q-9.83 3-20.65 6.89 2.16 5.37 5.47 14.66 9.34-3.35 16.51-6.37l1.87 5.24q-7.92 2.46-16.77 5.63 3.22 9 6.36 16.83 11.67-4.17 22.03-8.46zM202.27 140.45l-4.92 1.76q-.22-.6-17.54-12.73-18.15-12.75-21.43-16.61l-.38.13q3.66 8.23 5.82 14.29 4.22 11.8 9 23.65L167 153q-3.48-11.64-8-24.26-4.43-12.4-8.35-21.51l6.75-2.41q.35 1 16.34 12.25 16.74 11.85 20 16.08l.35-.12q-3.65-8.37-5.79-14.35-4.64-13-8.37-21.9l6-2.14q2.73 9.52 7.16 21.94 4.5 12.66 9.18 23.87zM228.43 79.51l1.6 5q-7.09 2.13-14.51 4.78 2.34 6.78 6 17.14 4.09 11.47 8.94 23.93l-6.44 2.29q-3.85-12.13-8.16-24.2-3.65-10.22-6.32-17-5.19 1.86-14.47 5.64L193.49 92z"/>
                    </g></g>
                </svg>
            </div>
        </div>

        <form class="container mx-auto flex flex-col items-center pt-20 w-full justify-center " method="POST" action="/order">
            @csrf
            <div class="flex flex-col w-full lg:w-auto px-8 lg:px-0">
                <div class="flex flex-col lg:flex-row-reverse justify-start ">
                    <span class="flex flex-col">
                        <label for="name" class="block text-sm leading-5 font-medium text-white text-right">
                             نام و نام خانوادگی
                        </label>
                        <input id="name" type="text" name="name"
                            class="form-input block  w-full pl-12 mt-2 pr-4 py-3 sm:text-sm sm:leading-5 form-input border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md outline-none " style="direction:rtl"
                            value="{{ old('name') }}"
                            />
                            @error('name')
                                    <span class="invalid-feedback text-right text-xs mt-1 text-red-600" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror

                    </span>
                    <span class="flex flex-col lg:mr-6 mt-5 lg:mt-0">
                        <label for="tel" class="block text-sm leading-5 font-medium text-white text-right">
                            شماره تماس
                        </label>
                        <input id="tel" type="number"
                            name="tel"
                            class="form-input block w-full pl-12 pr-4 mt-2 py-3 sm:text-sm sm:leading-5 form-input border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md outline-none " style="direction:rtl;"
                            value="{{ old('tel') }}"
                            />
                          @error('tel')
                          <span class="invalid-feedback text-right text-xs mt-1 text-red-600" role="alert">
                              <strong>{{ $message }}</strong>
                          </span>
                        @enderror
                    </span>

                </div>
                <div class="flex flex-row-reverse justify-start mt-8 ">
                    <div class="flex flex-col justify-start">
                        <label class="text-right text-white" for="">حوزه فعالیت</label>
                        <div class="grid grid-cols-2 lg:flex lg:flex-row-reverse text-white mt-4">
                            <div class="text-gray-700 h-10 items-center flex flex-row-reverse pl-4 pr-4 lg:pr-0 rounded text-sm">
                                <input onclick="checkbox(this)" id="pimp" type="checkbox" class="w-4 h-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    name="pimp" value="0">
                                <label for="pimp" class=" flex flex-row-reverse items-center cursor-pointer text-white ">
                                   <span class="mr-3">راه انداز</span>
                                </label>
                            </div>
                            <div class="text-gray-700  h-10 items-center flex flex-row-reverse px-4 rounded  text-sm">
                                <input onclick="checkbox(this)" id="chef" type="checkbox" class="w-4 h-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                     name="chef" value="0">
                                <label for="chef" class="flex flex-row-reverse items-center cursor-pointer text-white">
                                   <span class="mr-3">سرآشپز / شف</span>
                                </label>
                            </div>
                             <div class="text-gray-700  h-10 items-center flex flex-row-reverse px-4 rounded  text-sm">
                                <input onclick="checkbox(this)" id="barista" type="checkbox" class="w-4 h-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    name="barista" value="0">
                                    <label for="barista"   class="flex flex-row-reverse items-center cursor-pointer text-white">
                                       <span class="mr-3">باریستا</span>
                                    </label>
                                </div>
                            <div class="text-gray-700  h-10 items-center flex flex-row-reverse px-4 rounded text-sm">
                                <input onclick="checkbox(this)" type="checkbox" id="bar" class="w-4 h-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                     name="bar" value="0">
                                <label for="bar" class="flex flex-row-reverse items-center cursor-pointer text-white">
                                   <span class="mr-3">بارتندر</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mt-8">
                    <span class="text-right mb-2 text-white text-sm">
                        چگونه میتوانیم با هم همکاری داشته باشیم
                    </span>
                    <textarea class="focus:border-indigo-300 mt-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md outline-none px-2 py-3 text-gray-600"
                        name="desc" id="" cols="30" rows="10" style=" resize: none;direction:rtl"
                        value="{{ old('desc') }}"
                        >
                    </textarea>
                    @error('desc')
                        <span class="invalid-feedback text-right text-xs mt-1 text-red-600" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div id="appetizer" class="mt-20 w-full flex flex-col px-4 lg:px-0">
                <div class="flex flex-row-reverse justify-start">
                    <span class="flex flex-row items-center text-white text-lg lg:text-xl" >
                        <span style="letter-spacing: 0.5em;" >
                            APPETIZER
                        </span>
                        <label class="mx-4">/</label>
                        <span class="">
                          پیش غذا
                        </span>
                    </span>
                </div>
                <div class="appetizer w-full flex flex-col mt-10 text-base lg:text-lg">
                    <div class="flex flex-row-reverse justify-start text-white mt-4">
                            <label onclick="next('dinner')" class="relative  flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                                <span class="flex flex-row-reverse items-center">
                                    <input type="radio" name="appetizer" value="سالاد مرغ و بادام‌زمینی" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                    <span class="mr-4 title">سالاد مرغ و بادام‌زمینی</span>
                                    <label class="mx-4 hidden lg:block">/</label>
                                </span>
                                <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                    PEANUTBUTTER CHICKEN
                                </span>
                            </label>
                    </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-0 lg:mt-4">
                        <label onclick="next('dinner')" class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="appetizer" value="میستا" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">میستا</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                MISTA
                            </span>
                        </label>
                    </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-4">
                        <label   onclick="next('dinner')" class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="appetizer" value="سالاد فیتنس" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">سالاد فیتنس</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                               FITNESS SALAD
                            </span>
                        </label>
                    </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-4">
                        <label  onclick="next('dinner')" class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="appetizer" value="ماست موسیر محلی" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">ماست موسیر محلی</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                PERSIAN SHALLOT YOGHURT
                            </span>
                        </label>
                    </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-0 lg:mt-4">
                        <label onclick="next('dinner')"  class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="appetizer" value="سیب‌زمینی سرخ‌شده" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">سیب‌زمینی سرخ‌شده</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                FRENCH FRIES
                            </span>
                        </label>
                    </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-4">
                        <label onclick="next('dinner')" onclick="next('dinner')"class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="appetizer" value="بورانی بادمجان" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">بورانی بادمجان</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                EGGPLANT BORANI
                            </span>
                        </label>
                    </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-4">
                        <label onclick="next('dinner')" class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="appetizer" value="امریکن پوتیتو" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">امریکن پوتیتو</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                AMERICAN POTATO
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div id="dinner" class="mt-20 w-full flex flex-col px-4 lg:px-0 pt-4">
                    <div class="flex flex-row-reverse justify-start">
                        <span class="flex flex-row items-center text-white text-lg lg:text-xl" >
                            <span style="letter-spacing: 0.5em;" >
                                DINNER
                            </span>
                            <label class="mx-4">/</label>
                            <span class="">
                            شام
                            </span>
                        </span>
                    </div>
                    <div class="dinner w-full flex flex-col mt-10 text-base lg:text-lg">
                        <div class="flex flex-row-reverse justify-start text-white mt-4">
                            <label onclick="next('drink')" class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                                <span class="flex flex-row-reverse items-center">
                                    <input type="radio" name="dinner" value="سالاد مرغ و بادام‌زمینی" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                    <span class="mr-4 title">سالاد مرغ و بادام‌زمینی</span>
                                    <label class="mx-4 hidden lg:block">/</label>
                                </span>
                                <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                    PEANUTBUTTER CHICKEN
                                </span>
                            </label>
                        </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-0 lg:mt-4">
                        <label onclick="next('drink')" class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="dinner" value="میستا" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">میستا</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                MISTA
                            </span>
                        </label>
                    </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-4">
                        <label onclick="next('drink')" class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="dinner" value="سالاد فیتنس" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">سالاد فیتنس</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                               FITNESS SALAD
                            </span>
                        </label>
                    </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-4">
                        <label onclick="next('drink')" class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="dinner" value="ماست موسیر محلی" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">ماست موسیر محلی</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                PERSIAN SHALLOT YOGHURT
                            </span>
                        </label>
                    </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-0 lg:mt-4">
                        <label onclick="next('drink')" class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="dinner" value="سیب‌زمینی سرخ‌شده" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">سیب‌زمینی سرخ‌شده</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                FRENCH FRIES
                            </span>
                        </label>
                    </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-4">
                        <label onclick="next('drink')" class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="dinner" value="بورانی بادمجان" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">بورانی بادمجان</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                EGGPLANT BORANI
                            </span>
                        </label>
                    </div>
                    <div class="flex flex-row-reverse justify-start text-white mt-4">
                        <label onclick="next('drink')" class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="dinner" value="امریکن پوتیتو" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">امریکن پوتیتو</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                AMERICAN POTATO
                            </span>
                        </label>
                    </div>
                    </div>
            </div>
            <div id="drink" class="mt-20 w-full flex flex-col px-4 lg:px-0">
                    <div class="flex flex-row-reverse justify-start">
                        <span class="flex flex-row items-center text-white text-lg lg:text-xl" >
                            <span style="letter-spacing: 0.5em;" >
                                DRINK
                            </span>
                            <label class="mx-4">/</label>
                            <span class="">
                            نوشیدنی
                            </span>
                        </span>
                    </div>
                    <div class="drink w-full flex flex-col mt-10 text-base lg:text-lg">
                        <div class="flex flex-row-reverse justify-start text-white mt-4">
                            <label  class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                                <span class="flex flex-row-reverse items-center">
                                    <input type="radio" name="drink" value="دلستر بشکه‌ای" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                    <span class="mr-4 title">دلستر بشکه‌ای</span>
                                    <label class="mx-4 hidden lg:block">/</label>
                                </span>
                                <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                    NON-ALCOHOLIC BEERS
                                </span>
                            </label>
                        </div>
                        <div class="flex flex-row-reverse justify-start text-white mt-0 lg:mt-4">
                        <label   class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="drink" value="دوغ مزه‌دار شده" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">دوغ مزه‌دار شده</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                RBELAN DOUGH
                            </span>
                        </label>
                        </div>
                        <div class="flex flex-row-reverse justify-start text-white mt-4">
                        <label   class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="drink" value="سودا با لیمو" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">سودا با لیمو</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                SODA WITH LIME
                            </span>
                        </label>
                        </div>
                        <div class="flex flex-row-reverse justify-start text-white mt-4">
                        <label   class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="drink" value="نوشابه" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">نوشابه</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                SOFT DRINK
                            </span>
                        </label>
                        </div>
                        <div class="flex flex-row-reverse justify-start text-white mt-0 lg:mt-4">
                        <label   class="relative flex flex-col w-full lg:w-auto lg:flex-row-reverse items-end lg:items-center cursor-pointer mx-0 lg:mx-2 mb-4 text-right px-2  py-2 rounded-lg">
                            <span class="flex flex-row-reverse items-center">
                                <input type="radio" name="drink" value="آب معدنی" class="form-radio cursor-pointer animate-pulse w-5 h-5">
                                <span class="mr-4 title">آب معدنی</span>
                                <label class="mx-4 hidden lg:block">/</label>
                            </span>
                            <span style="letter-spacing: 0.5em;" class="text-left w-full lg:w-auto  mt-3 lg:mt-0" >
                                WATER
                            </span>
                        </label>
                        </div>
                    </div>
            </div>


            <button id="submit" type="submit" class="focus:outline-none px-16 py-3 mb-32 text-base text-white bg-indigo-800 hover:bg-indigo-700 transition-colors duration-200 rounded-md mt-8">
                ارسال
            </button>
        </form>
    </div>


    <script>

        function checkbox(tag){

            var oldVal=$(tag).val();

            if(oldVal==0){
                var val=1;
            }else{
                var val=0;
            }

            $(tag).val(val);
        }
        function next(type){
            var scroll = new SmoothScroll();
            var anchor = document.querySelector('#'+type);
            var options = { speed: 1000};
            var toggle = document.querySelector('#dinner');
            setTimeout(function(){
                scroll.animateScroll(anchor,toggle,options);
            }, 300);




        }

        // var scroll = new SmoothScroll('a[href*="#"]');
    </script>

     {{-- <script>
//         if ('serviceWorker' in navigator) {
//   // Use the window load event to keep the page load performant
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js');
//   });
// }
//     </script> --}}
</body>



</html>






