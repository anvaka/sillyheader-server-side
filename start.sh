#!/bin/sh
nodemon --ext js,html,css \
  --ignore static \
  --watch . \
  --watch ./node_modules/sillyheader-theme \
  --watch ./node_modules/sillyheader \
  --exec 'npm start' 
