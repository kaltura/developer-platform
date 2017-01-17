set -e
git config user.name "Travis CI"
git config user.email "bobby.brennan@gmail.com"

git fetch origin gh-pages:gh-pages
git checkout gh-pages

rsync -va --delete-after ./www/* ./
rm -rf node_modules/
git add .
git commit -m "Deploy to GitHub Pages"

git push -u https://$GITHUB_ACCESS_TOKEN@github.com/bobby-brennan/kaltura-recipes-v3 gh-pages
