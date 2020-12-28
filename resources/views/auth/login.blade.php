
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
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

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

    <div id="app" class="flex flex-col justify-start pt-10 items-center h-screen w-full overflow-screen bg-white" >

        <div class="mx-auto flex">
            <img class="transform scale-90" src="/images/construct.png" alt="">
        </div>
        <svg class="w-16 h-16 current-color text-indigo-600 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        <div class="w-full flex flex-row items-center container mx-auto text-center py-4 justify-center text-gray-700 font-bold text-3xl">

            <span>
                Website Is Under Construction
            </span>
            {{-- <form class="container mx-auto flex flex-col items-center w-full justify-center" method="POST" action="{{ route('logout') }}">
            <span>logout</span>
            </form> --}}

        </div>
        <div class="login-form fixed flex  h-full w-full justify-center  hidden z-10 top-0">
            <span class="fixed h-full w-full bg-gray-200 top-0 opacity-75"></span>

            <div class="fixed flex flex-col mt-40 w-1/2 bg-white rounded-lg mx-auto z-20 opacity-100 shadow-xl">
                <div class="flex flex-col w-full py-10">
                    <form class="container mx-auto flex flex-col items-center w-full justify-center" method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="flex flex-row-reverse items-center mb-6">
                            <label for="نام کاربری" class="mr-4 w-24">: نام کاربری</label>

                            <div class="px-8">
                                <input style="direction:rtl" id="email" type="email" class="flex appearance-none focus:outline-none border border-gray-400 rounded py-2 px-4 @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                {{-- @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror --}}
                            </div>
                        </div>
                        <div class="flex flex-row-reverse items-center">
                            <label  class="mr-4 w-24">: رمز عبور</label>

                            <div class="px-8">
                                <input style="direction:rtl" id="password" type="password" class="flex appearance-none focus:outline-none border border-gray-400 rounded py-2 px-4 @error('password') is-invalid @enderror" name="password" value="{{ old('email') }}" required autocomplete="current-password" autofocus>

                                {{-- @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror --}}
                            </div>
                        </div>

                        {{-- <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">رمز عبور</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div> --}}



                        <div class="flex ">
                            <div class="mx-auto mt-10">
                                <button type="submit" class="py-2 px-6 text-white bg-green-600 text-white text-center rounded-md">
                                    لاگین
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {{-- <div class="col-md-8 ">
                    <div class="card">
                        <div class="card-header">{{ __('Login') }}</div>

                        <div class="card-body">
                            <form method="POST" action="{{ route('login') }}">
                                @csrf

                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                        @error('password')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>



                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            {{ __('Login') }}
                                        </button>


                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> --}}
            </div>
        </div>
    </div>


    <script>

$('body').keypress(function( event ) {

    if ( event.which == 108 ) {
        $('.login-form').removeClass('hidden');
        // alert('s');
    }
    });

    </script>

//     {{-- <script>
//         if ('serviceWorker' in navigator) {
//   // Use the window load event to keep the page load performant
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js');
//   });
// }
//     </script> --}}
</body>



</html>





