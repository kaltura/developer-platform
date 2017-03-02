set -e
git config user.name "Travis CI"
git config user.email "bobby.brennan@gmail.com"

git clone https://github.com/kaltura/developer-platform-generated
rm -r developer-platform-generated/www

lucybot build --prerender --destination ./developer-platform-generated/www

cd developer-platform-generated
echo "Commiting build"
git status
git add www/*
git commit -a -m "Build www/ [skip ci]"
git push -q -u https://$GITHUB_ACCESS_TOKEN@github.com/kaltura/developer-platform-generated HEAD:master >> /dev/null 2>&1
