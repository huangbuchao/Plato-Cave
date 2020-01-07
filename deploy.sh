#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git config user.name huangbuchao
git config user.email huangbuchao@gmail.com
git add -A
git commit -m 'deploy'

git push -f https://${secrets.ACCESS_TOKEN ||`x-access-token:${secrets.GITHUB_TOKEN}`}@github.com/huangbuchao/Plato-Cave.git master:gh-pages

cd -