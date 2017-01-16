set -e
git config user.name "Travis CI"
git config user.email "bobby.brennan@gmail.com"

git fetch origin gh-pages
git checkout gh-pages || git checkout --orphan gh-pages

mv www/* ./
git add .
git commit -m "Deploy to GitHub Pages"

git push -u https://$GITHUB_ACCESS_TOKEN@github.com/bobby-brennan/kaltura-recipes-v3 gh-pages
