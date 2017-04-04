set -e

git config --global user.name "Travis CI"
git config --global user.email "bobby.brennan@gmail.com"

mkdir ./markdown/generated
./scripts/resources/all.sh

#echo "Building VPaaS Website..."
#git clone https://github.com/kaltura/developer-platform-generated generated/vpaas
#rm -rf generated/vpaas/*
#TARGET_API=vpaas lucybot build --prerender --destination generated/vpaas

echo "Building OTT Website..."
git clone https://github.com/kaltura/ott-developer-platform-generated generated/ott
rm -rf generated/ott/*
TARGET_API=ott lucybot build --prerender --destination generated/ott

#cd generated/vpaas
#echo "Commiting build"
#git add .
#git commit -a -m "Build site"
#git push -q -u https://$GITHUB_ACCESS_TOKEN@github.com/kaltura/developer-platform-generated HEAD:master >> /dev/null 2>&1

cd ../ott
echo "Commiting build"
git add .
git commit -a -m "Build site"
git push -q -u https://$GITHUB_ACCESS_TOKEN@github.com/kaltura/ott-developer-platform-generated HEAD:master >> /dev/null 2>&1
