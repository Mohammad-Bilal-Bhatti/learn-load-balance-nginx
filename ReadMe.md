# Simple load-balancing express app using NGINX

## Description

This demo contains a simple express application which listens on port 80 by default with single route that sends request details as a response. Dockerized it so that we create multiple instances of it. 

Here we have used nginx hear as a load balancer, you can check its configuration from `/nginx/nginx.conf` and can edit it for your own experiment. And created 3 instances of our backend application. You can experiment by creating as many instances you want.

NOTE: If you want to change the desired number of instances you have to make changes  in `docker-compose.yml` and `nginx/nginx.conf` and start the containers again


## Architecture

```txt

                           /--------- [app-1]
[client] --------  [gateway] ---------- [app-2]
                           \--------- [app-3]

```

## Requirements
- docker
- docker-compose
- curl

## Run
```sh
# run all services at once in detatched mode
$ docker-compose up -d

# test 
$ curl http://localhost/

$ while sleep 0.5; do curl http://localhost/; done
```
