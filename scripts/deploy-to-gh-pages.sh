#!/bin/bash

# Exit with nonzero exit code if anything fails.
set -e

git config user.name "NurgalievAl"
git config user.email "siriusiii1209@gmail.com"

echo "Start to deploy..."

git checkout --orphan gh-pages
ls -l

git --work-tree ./dist add --all
git --work-tree ./dist commit -m "Deploy to GitHub Pages"
git push -f origin HEAD:gh-pages
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        branch: ${{ github.ref }}
rm -r dist

git checkout -f main
git branch -D gh-pages

echo "Successfully deployed"
