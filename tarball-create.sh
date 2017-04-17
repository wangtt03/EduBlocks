#!/bin/bash

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

LOCALREPO="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $LOCALREPO

NODE_VERSION=$(node -v)

if [ $? -ne 0 ]; then
  echo 'NodeJS has not been installed!'
  exit 1
fi

YARN_VERSION=$(yarn --version)

if [ $? -ne 0 ]; then
  echo 'Yarn has not been installed!'
  exit 1
fi

mkdir -p $LOCALREPO/edublocks
rm -rf $LOCALREPO/edublocks/*
rm $LOCALREPO/edublocks.tar.xz

echo ''
echo 'Building EduBlocks general'
echo '========================='

echo ''
echo 'Copying general files...'

rm $LOCALREPO/tmp/*.py

cp $LOCALREPO/edublocks.desktop   $LOCALREPO/edublocks
cp $LOCALREPO/runtime_support.py  $LOCALREPO/edublocks

cp -r $LOCALREPO/scripts  $LOCALREPO/edublocks

echo ''
echo 'Building EduBlocks server'
echo '========================='

cd $LOCALREPO/server

echo ''
echo 'Installing dev dependencies...'
yarn install

echo ''
echo 'Compiling...'
yarn run build

mkdir -p $LOCALREPO/edublocks/server

cp $LOCALREPO/server/build/*      $LOCALREPO/edublocks/server
cp $LOCALREPO/server/package.json $LOCALREPO/edublocks/server
cp $LOCALREPO/server/yarn.lock    $LOCALREPO/edublocks/server

cd $LOCALREPO/edublocks/server

echo ''
echo 'Installing production dependencies...'
yarn install --production

echo ''
echo 'Building EduBlocks client'
echo '========================='

mkdir -p $LOCALREPO/edublocks/ui

cp $LOCALREPO/ui/package.json $LOCALREPO/edublocks/ui
cp $LOCALREPO/ui/yarn.lock    $LOCALREPO/edublocks/ui
cp $LOCALREPO/ui/main.js      $LOCALREPO/edublocks/ui
cp $LOCALREPO/ui/index.html   $LOCALREPO/edublocks/ui

cp -r $LOCALREPO/ui/lib     $LOCALREPO/edublocks/ui
cp -r $LOCALREPO/ui/blockly $LOCALREPO/edublocks/ui
cp -r $LOCALREPO/ui/images  $LOCALREPO/edublocks/ui
cp -r $LOCALREPO/ui/js      $LOCALREPO/edublocks/ui
cp -r $LOCALREPO/ui/css     $LOCALREPO/edublocks/ui

cd $LOCALREPO

echo 'Compressing distributable...'
tar -cJvf edublocks.tar.xz edublocks

echo ''
echo '==== EduBlock distributable created successfully (edublocks.tar.xz)'
echo ''
