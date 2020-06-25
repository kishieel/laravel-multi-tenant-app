<?php

namespace App\Http\Middleware;

use App\Tenant;
use Closure;
use Config;
use DB;

class SwitchTenant
{
    public function handle($request, Closure $next)
    {
        if( $tenant = Tenant::where('subdomain', $request->subdomain )->first() ) {
            DB::disconnect('tenant');
            Config::set('database.connections.tenant.database', $tenant->db_name );
            DB::reconnect('tenant');

            return $next($request);
        }

        return response()->json(array("status" => 404, "msg" => "Tenant not found. Please try again later or contact with support."), 404);
    }
}
