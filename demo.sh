#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# Copy circle CI configuration to prevent running from gh-pages
cp circle.yml docs/.vuepress/dist

# navigate into the build output directory
cd docs/.vuepress/dist

git config --global user.email "$GH_EMAIL" > /dev/null 2>&1
git config --global user.name "$GH_NAME" > /dev/null 2>&1

git init
git add -A
git commit -m "Deploy"

git push -f git@github.com:EducationLink/vue-tel-input.git master:gh-pages

cd -
