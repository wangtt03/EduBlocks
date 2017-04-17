#!/bin/bash

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  PROJECT="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$PROJECT/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
PROJECT="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

sudo cp $PROJECT/edublocks-server.service /etc/systemd/system/

sudo systemctl enable edublocks-server
sudo systemctl start edublocks-server
