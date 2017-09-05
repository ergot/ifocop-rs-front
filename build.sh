#!/bin/bash
yarn build
rm ../ifocop-RS/client -r
cp build ../ifocop-RS/client -r
cd ../ifocop-RS
git add -A
git commit -m "build $(date +'%Y%m%d')"
git push
git push heroku