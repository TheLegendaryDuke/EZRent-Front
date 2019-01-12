#!/bin/bash

sudo docker build -t ezrent-front .
sudo docker tag ezrent-front gcr.io/ezrent-227517/front
sudo docker push gcr.io/ezrent-227517/front
