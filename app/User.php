<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $connection = "tenant";
    protected $table = "users";
}
