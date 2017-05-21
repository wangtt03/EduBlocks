#!/bin/bash

cd $1

AR=arm-linux-gnueabihf-ar CC=arm-linux-gnueabihf-gcc CXX=arm-linux-gnueabihf-g++ LINK=arm-linux-gnueabihf-g++ node-gyp --arch=arm configure
AR=arm-linux-gnueabihf-ar CC=arm-linux-gnueabihf-gcc CXX=arm-linux-gnueabihf-g++ LINK=arm-linux-gnueabihf-g++ node-gyp --arch=arm build
