#!/bin/bash

set -e

echo "PORT=4000" > ./server/.env

npm install --prefix ./server

npm run dev --prefix ./server