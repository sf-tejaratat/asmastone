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
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
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
    @font-face {
           font-family: 'yekan-regular';
           src: url('/fonts/ttf/iranyekanwebregular.ttf') format('truetype');
           /* src: url('/fonts/Yekan.ttf') format('truetype'); */
    }

    .yekan-regular{
       font-family: yekan-regular;
   }}
</style>

<body class="font-sans antialiased  yekan-regular max-h-screen overflow-hidden">

    <div id="app" class="flex flex-col justify-start items-center h-screen w-full overflow-hidden" style="background-color:#eee" >
        <div class="flex flex-row justify-end w-full lg:w-11/12 mt-20 ">
            <span class="bg-indigo-700 rounded-md rounded-b-none px-8 py-2 text-white">
                لیست رزرو ها
            </span>
        </div>
        <div class="bg-white shadow-sm rounded py-10 mx-4 px-4 flex-1 h-full flex flex-col w-full md:w-11/12 jusify-center md:pr-4">
            <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200" style="direction:rtl">
                      <thead class="yekan-regular">
                        <tr>
                          <th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            ردیف
                          </th>
                          <th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            نام
                          </th>
                          <th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            تلفن
                          </th>
                          <th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            تخصص
                          </th>
                          <th class="px-2 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                           تمایل همکاری
                          </th>
                          <th class="px-2 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              پیش غذا
                          </th>
                          <th class="px-2 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              شام
                          </th>
                          <th class="px-2 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              نوشیدنی
                          </th>
                          <th class="px-2 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                             زمان ثبت
                          </th>
                          <th class="py-3 bg-gray-50">

                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        @foreach($orders as $key=>$item)
                        <tr>
                            <td class="py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium">
                                {{$key+1}}
                            </td>

                            <td class="px-6 py-4 text-center whitespace-no-wrap">
                                <div class="text-sm leading-5 text-gray-900">
                                    {{$item->name}}
                                </div>
                            </td>
                            <td class="px-6 py-4 text-center whitespace-no-wrap">
                                <div class="text-sm leading-5 text-gray-900">
                                    {{$item->tel}}
                                </div>
                            <!-- <div class="text-sm leading-5 text-gray-500">Optimization</div> -->
                            </td>
                            <td class="px-6 py-4 text-center whitespace-no-wrap text-xs">
                            {{$item->specialist}}
                            </td>
                            <td class="px-6 py-4 text-center whitespace-no-wrap text-sm leading-5 text-gray-500">
                            @if($item->desc!=null || $item->desc!='')
                                <svg title="{{$item->desc}}" class="w-6 h-6 mx-auto cursor-pointer text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            @else
                                -
                            @endif
                            </td>
                            <td class="py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium">
                            @if($item->apt!=null || $item->apt!='')
                                {{$item->apt}}
                            @else
                                -
                            @endif
                            </td>
                            <td class="py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium">
                            @if($item->dinner!=null || $item->dinner!='')
                                {{$item->dinner}}
                            @else
                                -
                            @endif
                            </td>
                            <td  class=" py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium">
                            @if($item->drink!=null || $item->drink!='')
                                {{$item->drink}}
                            @else
                                -
                            @endif
                            </td>
                            <td  class=" py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium" style="direction:ltr">
                            {{$item->created_at}}
                            </td>
                            <td class=" py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                             <span class="text-red-600 hover:text-red-900 cursor-pointer">
                                <svg title="delete reserve" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                             </span>
                            </td>
                        </tr>
                        @endforeach

                        <!-- More rows... -->
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>


    <script>

        $( document ).tooltip();
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






