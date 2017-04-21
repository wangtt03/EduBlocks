#!/bin/bash

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

PROJECT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $PROJECT

ARCH=$(uname -m)

if [ $ARCH != 'armv6l' ]; then
  # node node_module/.bin/electron

  sleep 10

  chromium-browser --app=http://localhost:8081/
else
  # echo 'Raspberry Pi 1 or Zero detected, falling back to Chromium'

  # Give the poor little Raspberry Pi time to start the server...
  sleep 60

  chromium-browser --app=http://localhost:8081/
fi
