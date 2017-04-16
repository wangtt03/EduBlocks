#!/bin/bash

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

LOCALREPO="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $LOCALREPO

echo "Copying the desktop shortcut to your desktop"
sudo cp edublocks.desktop ~/Desktop
echo "Copying the icon."
sudo cp ui/images/logo.png /usr/share/icons/hicolor/scalable/apps/logo.png
echo "Making the program visable in the menu."
sudo cp edublocks.desktop /usr/share/applications
echo "Downloading the edupy library"
sudo pip3 install edupy python-sonic

NODE_VERSION=$(node -v 2> /dev/null)

if [ $? -ne 0 ]; then
  echo "Installing Node.JS..."
  wget https://nodejs.org/dist/v6.2.1/node-v6.2.1-linux-armv6l.tar.gz
  tar -xzf node-v6.2.1-linux-armv6l.tar.gz
  sudo cp -R node-v6.2.1-linux-armv6l/* /usr/local/
  export PATH=$PATH:/usr/local/bin
  echo 'PATH=$PATH:/usr/local/bin' >> ~/.bashrc
fi

YARN_VERSION=$(yarn --version 2> /dev/null)

if [ $? -ne 0 ]; then
  echo "Installing Yarn..."
  sudo npm install --global yarn
fi

cd $LOCALREPO/ui
yarn install --production

if [ ! -L /usr/local/bin/edublocks ]; then
  echo "Creating symlink..."
  sudo ln -s $LOCALREPO/start.sh /usr/local/bin/edublocks
fi

if [ ! -L /usr/local/bin/edublocks-uninstall ]; then
  echo "Creating uninstall symlink..."
  sudo ln -s $LOCALREPO/uninstall.sh /usr/local/bin/edublocks-uninstall
fi
