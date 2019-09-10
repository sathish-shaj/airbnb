#! /bin/bash

yarn build:server
docker build -t shaj/airbnb:latest . 
docker push shaj/airbnb:latest         
ssh root@<IP> "docker pull shaj/airbnb:latest && docker tag shaj/airbnb:latest dokku/airbnb:latest && dokku tags:deploy airbnb latest"