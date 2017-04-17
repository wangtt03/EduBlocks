#!/bin/bash

# Convenience script for one line installation.
# Not intended to be run from here but rather it should curl'ed from somewhere.

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

cd ~

echo ''
echo 'Downloading package...'
wget http://edublocks.org/downloads/edublocks.tar.xz

echo ''
echo 'Extracting package...'
tar -xvf edublocks.tar.xz

echo ''
echo 'Running install dependencies script...'
~/edublocks/scripts/install-deps.sh

echo ''
echo 'Running install script...'
~/edublocks/scripts/install.sh
