#!/bin/bash

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  LOCALREPO="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$LOCALREPO/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
LOCALREPO="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
LOCALREPO=$(dirname $LOCALREPO)

if [ $(basename $LOCALREPO) == 'edublocks' ]; then
  sudo rm -rf $LOCALREPO
fi

rm -f ~/Desktop/edublocks.desktop

sudo rm -f /usr/local/bin/edublocks
sudo rm -f /usr/local/bin/edublocks-headless
sudo rm -f /usr/local/bin/edublocks-startup-enable
sudo rm -f /usr/local/bin/edublocks-startup-disable
sudo rm -f /usr/local/bin/edublocks-uninstall

sudo rm -f /usr/share/icons/hicolor/scalable/apps/logo.png
sudo rm -f /usr/share/applications/edublocks.desktop
