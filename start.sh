#!/bin/bash

LOCALREPO="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Make sure node isnt running somewhere...
pkill node

cd $LOCALREPO/server
npm start &

cd $LOCALREPO/ui
2>/dev/null 1>&2 npm start
