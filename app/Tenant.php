<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    protected $connection = "system";
    protected $table = "tenants";
}
