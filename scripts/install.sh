#!/bin/bash

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

LOCALREPO="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
LOCALREPO=$(dirname $LOCALREPO)

INSTALLPATH=/opt/edublocks

sudo mkdir -p $INSTALLPATH

sudo cp -r $LOCALREPO/* $INSTALLPATH

echo "Copying the desktop shortcut to your desktop..."
cp $LOCALREPO/edublocks.desktop ~/Desktop

echo "Copying the icon..."
sudo cp $LOCALREPO/ui/images/logo.png /usr/share/icons/hicolor/scalable/apps/logo.png

echo "Making the program visible in the menu..."
sudo cp $LOCALREPO/edublocks.desktop /usr/share/applications

echo "Creating symlinks..."

sudo rm -f /usr/local/bin/edublocks
sudo rm -f /usr/local/bin/edublocks-headless
sudo rm -f /usr/local/bin/edublocks-startup-enable
sudo rm -f /usr/local/bin/edublocks-startup-disable
sudo rm -f /usr/local/bin/edublocks-uninstall

sudo ln -s $INSTALLPATH/scripts/start.sh /usr/local/bin/edublocks
sudo ln -s $INSTALLPATH/server/start.sh /usr/local/bin/edublocks-headless
sudo ln -s $INSTALLPATH/server/startup-enable.sh /usr/local/bin/edublocks-startup-enable
sudo ln -s $INSTALLPATH/server/startup-disable.sh /usr/local/bin/edublocks-startup-disable
sudo ln -s $INSTALLPATH/scripts/uninstall.sh /usr/local/bin/edublocks-uninstall
