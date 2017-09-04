#!/bin/bash

#docker run -v "$PWD":/root/workspace -t -i node:6.10 bash

#By default, you don't need to install this
sudo apt-get update
sudo apt-get install nodejs npm
npm install babel-core babel-loader babel-preset-es2015 webpack webpack-dev-server --save
npm install mocha chai karma karma-chai karma-mocha karma-webpack karma-phantomjs-launcher --save-dev
