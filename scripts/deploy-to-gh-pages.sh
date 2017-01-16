set -e
git config user.name "Travis CI"
git config user.email "bobby.brennan@gmail.com"

ls -lah ./www

echo "Lucy DIR"
ls -lah /home/travis/.nvm/versions/node/v7.4.0/lib/node_modules/lucy-v3

git fetch origin gh-pages:gh-pages
git checkout gh-pages

git status

mv www/* ./
git add .
git commit -m "Deploy to GitHub Pages"

git push -u https://$GITHUB_ACCESS_TOKEN@github.com/bobby-brennan/kaltura-recipes-v3 gh-pages
