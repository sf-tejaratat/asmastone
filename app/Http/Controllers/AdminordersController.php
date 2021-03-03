<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Inviteduser;

class AdminordersController extends Controller
{
    public function index()
    {
        $orders = Inviteduser::all();
        foreach ($orders as $key => $order) {
            $specialist = implode('-', unserialize($order->specialist));
            $order->specialist = $specialist;
        }
        return view('orders', ['orders' => $orders]);
    }
    public function setOrder(Request $request)
    {
        // dd($request);
        $name = $request->name;
        $tel = $request->tel;
        $bar = $request->input('bar');
        $pimp = $request->input('pimp');
        $desc = $request->input('desc');
        $chef = $request->input('chef');
        $barista = $request->input('barista');
        $appetizer = $request->input('appetizer');
        $dinner = $request->input('dinner');
        $drink = $request->input('drink');



        $array = ['name' => $name, 'tel' => $tel, 'bar' => $bar, 'pimp' => $pimp, 'desc' => $desc, 'chef' => $chef, 'barista' => $barista];
        Validator::make($array, [
            'name' => ['required', 'string', 'max:40'],
            'tel' => ['required', 'unique:invitedusers', 'starts_with:09', 'numeric', 'digits:11'],
            'desc' => 'string|max:1000|nullable'
        ])->validate();

        $specialist = [];
        if ($bar == 1) {
            array_push($specialist, 'بارتندر');
        }
        if ($pimp == 1) {
            array_push($specialist, 'راه انداز');
        }
        if ($chef == 1) {
            array_push($specialist, 'سرآشپز/شف');
        }
        if ($barista == 1) {
            array_push($specialist, 'باریستا');
        }
        $specialist = serialize($specialist);
        date_default_timezone_set('Asia/Tehran');

        $invitedUser = new Inviteduser();

        $invitedUser->name = $name;
        $invitedUser->tel = $tel;
        $invitedUser->specialist = $specialist;
        $invitedUser->desc = $desc;
        $invitedUser->drink = $drink;
        $invitedUser->apt =  $appetizer;
        $invitedUser->dinner = $dinner;

        $invitedUser->save();

        return redirect('/');
    }
}
