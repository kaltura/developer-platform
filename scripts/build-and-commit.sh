set -e

git config --global user.name "Travis CI"
git config --global user.email "bobby.brennan@gmail.com"

mkdir ./markdown/generated

echo "Building OVP Website..."
git clone https://github.com/kaltura/developer-platform-generated generated/ovp
rm -rf generated/ovp/*
TARGET_API=ovp ./scripts/resources/all.sh
TARGET_API=ovp lucybot build --prerender --destination generated/ovp

cd generated/ovp
git pull
echo "Commiting OVP build"
git add . >> /dev/null
echo "Added everything to commit"
git commit -a -m "Build site" >> /dev/null
echo "Committed everything"
git push -q -u https://$KALT_GITHUB_ACCESS_TOKEN@github.com/kaltura/developer-platform-generated HEAD:${GITHUB_REF##*/} # >> /dev/null 2>&1
echo "Pushed new site"
cd ../../

#echo "Building OTT Website..."
#git clone https://github.com/kaltura/ott-developer-platform-generated generated/ott
#rm -rf generated/ott/*
TARGET_API=ott ./scripts/resources/all.sh
TARGET_API=ott lucybot build --prerender --destination generated/ott

#cd generated/ott
#echo "Commiting OTT build"
#git add . >> /dev/null
#git commit -a -m "Build site" >> /dev/null
#git push -q -u https://$GITHUB_ACCESS_TOKEN@github.com/kaltura/ott-developer-platform-generated HEAD:$BRANCH >> /dev/null 2>&1
