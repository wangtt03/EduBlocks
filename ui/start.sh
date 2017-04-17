#!/bin/bash

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

PROJECT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $PROJECT

ARCH=$(uname -m)

if [ $ARCH != 'armv6l' ]; then
  yarn start
else
  echo 'Raspberry Pi 1 or Zero detected, falling back to Chromium'
  chromium-browser --app=http://localhost:8081/
fi
