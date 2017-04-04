set -e

mkdir ./markdown/generated
./scripts/resources/all.sh

git clone https://github.com/kaltura/developer-platform-generated ../developer-platform-generated
rm -rf ../developer-platform-generated/generated
mkdir ../developer-platform-generated/generated

TARGET_API=vpaas lucybot build --prerender --destination ../developer-platform-generated/generated/vpaas
TARGET_API=ott lucybot build --prerender --destination ../developer-platform-generated/generated/ott

cd ../developer-platform-generated
git config --global user.name "Travis CI"
git config --global user.email "bobby.brennan@gmail.com"
echo "Commiting build"
git status
git add generated/*
git commit -a -m "Build generated/ [skip ci]"
git push -q -u https://$GITHUB_ACCESS_TOKEN@github.com/kaltura/developer-platform-generated HEAD:master >> /dev/null 2>&1
