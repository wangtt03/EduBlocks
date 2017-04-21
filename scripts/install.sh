#!/bin/bash

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

SCRIPT_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

APP_PATH=$(dirname $SCRIPT_PATH)

INSTALL_PATH=/opt/edublocks

sudo mkdir -p $INSTALL_PATH

sudo cp -r $APP_PATH/* $INSTALL_PATH

echo "Copying the desktop shortcut to your desktop..."
cp $APP_PATH/edublocks.desktop ~/Desktop

echo "Copying the icon..."
sudo cp $APP_PATH/ui/images/logo.png /usr/share/icons/hicolor/scalable/apps/logo.png

echo "Making the program visible in the menu..."
sudo cp $APP_PATH/edublocks.desktop /usr/share/applications

echo "Creating symlinks..."

sudo rm -f /usr/local/bin/edublocks
sudo rm -f /usr/local/bin/edublocks-headless
sudo rm -f /usr/local/bin/edublocks-startup-enable
sudo rm -f /usr/local/bin/edublocks-startup-disable
sudo rm -f /usr/local/bin/edublocks-uninstall

sudo ln -s $INSTALL_PATH/scripts/start.sh /usr/local/bin/edublocks
sudo ln -s $INSTALL_PATH/server/start.sh /usr/local/bin/edublocks-headless
sudo ln -s $INSTALL_PATH/server/startup-enable.sh /usr/local/bin/edublocks-startup-enable
sudo ln -s $INSTALL_PATH/server/startup-disable.sh /usr/local/bin/edublocks-startup-disable
sudo ln -s $INSTALL_PATH/scripts/uninstall.sh /usr/local/bin/edublocks-uninstall
