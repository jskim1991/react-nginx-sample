## Useful Commands
delete-images:
	docker image prune -a -f

stop-containers:
	docker-compose -f docker-compose.yaml down

build-images:
	docker-compose -f docker-compose.yaml build

run-containers:
	docker-compose -f docker-compose.yaml up -d



## Nginx Container default values:

$ /etc/nginx # cat nginx.conf
```
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```


$ /usr/lib/nginx/modules # ls
```
ngx_http_geoip_module-debug.so         ngx_http_image_filter_module.so        ngx_http_xslt_filter_module-debug.so   ngx_stream_geoip_module.so
ngx_http_geoip_module.so               ngx_http_js_module-debug.so            ngx_http_xslt_filter_module.so         ngx_stream_js_module-debug.so
ngx_http_image_filter_module-debug.so  ngx_http_js_module.so                  ngx_stream_geoip_module-debug.so       ngx_stream_js_module.so
```