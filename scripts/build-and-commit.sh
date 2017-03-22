set -e

git clone https://github.com/kaltura/developer-platform-generated ../developer-platform-generated
rm -rf ../developer-platform-generated/www
node ./scripts/schemas.js
node ./scripts/client_libraries.js
lucybot build --prerender --destination ../developer-platform-generated/www

cd ../developer-platform-generated
git config --global user.name "Travis CI"
git config --global user.email "bobby.brennan@gmail.com"
echo "Commiting build"
git status
git add www/*
git commit -a -m "Build www/ [skip ci]"
git push -q -u https://$GITHUB_ACCESS_TOKEN@github.com/kaltura/developer-platform-generated HEAD:master >> /dev/null 2>&1
