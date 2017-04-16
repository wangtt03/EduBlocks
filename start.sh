#!/bin/bash

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  LOCALREPO="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
LOCALREPO="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

# Make sure node isnt running somewhere...
pkill node

cd $LOCALREPO/server
npm start &

cd $LOCALREPO/ui
2>/dev/null 1>&2 npm start
