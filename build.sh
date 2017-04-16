#!/bin/bash

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

mkdir -p $LOCALREPO/build
rm -rf $LOCALREPO/build/*

echo 'Building EduBlocks general'
echo '========================='

cp $LOCALREPO/edublocks.desktop   $LOCALREPO/build
cp $LOCALREPO/runtime_support.py  $LOCALREPO/build
cp $LOCALREPO/start.sh            $LOCALREPO/build
cp $LOCALREPO/setup.py            $LOCALREPO/build
cp $LOCALREPO/README.txt          $LOCALREPO/build
cp $LOCALREPO/CHANGELOG.txt       $LOCALREPO/build

echo 'Building EduBlocks server'
echo '========================='

cd $LOCALREPO/server

echo 'Installing dev dependencies...'
yarn install

echo 'Compiling...'
yarn run build

mkdir -p $LOCALREPO/build/server

cp $LOCALREPO/server/build/*      $LOCALREPO/build/server
cp $LOCALREPO/server/package.json $LOCALREPO/build/server
cp $LOCALREPO/server/yarn.lock    $LOCALREPO/build/server

cd $LOCALREPO/build/server

echo 'Installing production dependencies...'
yarn install --production

echo 'Building EduBlocks client'
echo '========================='

mkdir -p $LOCALREPO/build/ui

cp $LOCALREPO/ui/package.json $LOCALREPO/build/ui
cp $LOCALREPO/ui/yarn.lock    $LOCALREPO/build/ui
cp $LOCALREPO/ui/main.js      $LOCALREPO/build/ui
cp $LOCALREPO/ui/index.html   $LOCALREPO/build/ui

cp -r $LOCALREPO/ui/lib     $LOCALREPO/build/ui
cp -r $LOCALREPO/ui/images  $LOCALREPO/build/ui
cp -r $LOCALREPO/ui/js      $LOCALREPO/build/ui
cp -r $LOCALREPO/ui/css     $LOCALREPO/build/ui

cd $LOCALREPO/build/ui

echo 'Installing production dependencies...'
yarn install --production
