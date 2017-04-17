#!/bin/bash

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

LOCALREPO="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
LOCALREPO=$(dirname $LOCALREPO)

cd $LOCALREPO

echo "Downloading the edupy library"
sudo pip3 install edupy python-sonic blinkt explorerhat

if [ -f ~/.config/chromium/Default/Preferences ]; then
  echo 'Changing Chromium preferences to ask for directory upon saving a download'
  sed -i 's/"download":{"directory_upgrade":true}/"download":{"directory_upgrade":true,"prompt_for_download":true}/g' ~/.config/chromium/Default/Preferences
fi

NODE_VERSION=$(node -v 2> /dev/null)

if [ -z $NODE_VERSION ]; then
  NODE_VERSION='none'
fi

if [ $NODE_VERSION != 'v6.2.1' ]; then
  echo "Installing Node.JS..."
  wget https://nodejs.org/dist/v6.2.1/node-v6.2.1-linux-armv6l.tar.gz
  tar -xzf node-v6.2.1-linux-armv6l.tar.gz
  sudo cp -R node-v6.2.1-linux-armv6l/* /usr/local/
  export PATH=$PATH:/usr/local/bin
  echo 'PATH=$PATH:/usr/local/bin' >> ~/.bashrc
fi

ARCH=$(uname -m)

if [ $ARCH != 'armv6l' ]; then
  YARN_VERSION=$(yarn --version 2> /dev/null)

  if [ -z $YARN_VERSION ]; then
    YARN_VERSION='none'
  fi

  if [ $? -ne 0 ]; then
    echo "Installing Yarn..."
    sudo npm install --global yarn
  fi

  cd $LOCALREPO/ui
  yarn install --production
else
  echo 'Raspberry Pi 1 or Zero detected, falling back to Chromium'
fi

cd $LOCALREPO
