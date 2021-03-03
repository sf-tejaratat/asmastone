<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvitedusersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invitedusers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('tel');
            $table->text('specialist')->nullable();
            $table->longText('desc')->nullable();
            $table->string('drink')->nullable();
            $table->string('apt')->nullable();
            $table->string('dinner')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invitedusers');
    }
}
