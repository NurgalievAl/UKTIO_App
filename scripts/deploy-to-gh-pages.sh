#!/bin/bash

# Exit with nonzero exit code if anything fails.
set -e

git config user.name "NurgalievAl"
git config user.email "siriusiii1209@gmail.com"
git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
git config --local user.name "github-actions[bot]"
git commit -m "Add changes" -a
echo "Start to deploy..."

git checkout --orphan gh-pages
ls -l

git --work-tree ./dist add --all
git --work-tree ./dist commit -m "Deploy to GitHub Pages"
git push -f origin HEAD:gh-pages

rm -r dist

git checkout -f main
git branch -D gh-pages

echo "Successfully deployed"
