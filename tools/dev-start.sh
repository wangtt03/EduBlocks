#!/bin/bash

TOOLS_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

REPO_PATH=$TOOLS_PATH/..

cd $REPO_PATH/server
yarn
cd $REPO_PATH/server/node_modules/node-pty
node-gyp configure
node-gyp build
cd $REPO_PATH/server
yarn run watch &

cd $REPO_PATH/ui
yarn
yarn run watch
