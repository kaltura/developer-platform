set -e
git config user.name "Travis CI"
git config user.email "bobby.brennan@gmail.com"

git fetch origin master:master
git checkout master

lucybot build

echo "Commiting build"
git status
git add .
git commit -m "Build www/"

git push -q -u https://$GITHUB_ACCESS_TOKEN@github.com/bobby-brennan/kaltura-recipes-v3 master >> /dev/null
