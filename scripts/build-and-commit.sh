set -e
git config user.name "Travis CI"
git config user.email "bobby.brennan@gmail.com"

lucybot build --prerender

echo "Commiting build"
git status
git add www/*
git commit -a -m "Build www/ [skip ci]"
git pull --no-edit
git push -q -u https://$GITHUB_ACCESS_TOKEN@github.com/kaltura/developer-platform HEAD:master >> /dev/null 2>&1
