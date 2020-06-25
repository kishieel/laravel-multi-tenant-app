
# Laravel Multi Tenant App
Simple example off laravel multi tenant app based on subdomains.

## Start project on your local desktop

For first prepare your local environment to handle fake domains like a localhost. If you're using linux based system you should add this to /etc/hosts:
```
127.0.0.1   local.com
127.0.0.1   sub1.local.com
127.0.0.1   sub2.local.com
127.0.0.1   sub3.local.com
```
Then install all dependensies by:
```
composer install
npm install
```
Prepare databases:
 - app_system
 - app_tenant_sub1
 - app_tenant_sub2
 - app_tenant_sub3

And add tables. You can use this:
```
php artisan migrate --database=system						
php artisan migrate --database=tenant --path=/database/migrations/tenant
```
After it you can run app by:
```
php artisan serve
```
If you want to change something in React scripts run this:
```
npm run watch
```
Visit one from subdomains and look how it works :3
