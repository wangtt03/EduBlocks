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

if [ ! -L /usr/local/bin/edublocks ]; then
  echo "Creating symlink..."
  sudo ln -s $INSTALLPATH/scripts/start.sh /usr/local/bin/edublocks
fi

if [ ! -L /usr/local/bin/edublocks-uninstall ]; then
  echo "Creating uninstall symlink..."
  sudo ln -s $INSTALLPATH/scripts/uninstall.sh /usr/local/bin/edublocks-uninstall
fi
