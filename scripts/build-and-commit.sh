#!/bin/bash
set -e

git config --global user.name "Travis CI"
git config --global user.email "jess.portnoy@kaltura.com"

mkdir ./markdown/generated

echo "Building OVP Website..."
git clone https://github.com/kaltura/developer-platform-generated generated/ovp
cd generated/ovp
git checkout $BRANCH
git pull origin $BRANCH
full_prerender=0
if git log -1 --pretty=format:'%s' |grep -iq "[full build]"; then
  rm -rf generated/ovp/*
  full_prerender=1
  echo "Full build requested. All docs will be rendered anew."
fi
TARGET_API=ovp ./scripts/resources/all.sh
TARGET_API=ovp FULL_PRERENDER=$full_prerender lucybot build --prerender --destination .
BRANCH="${GITHUB_REF##*/}"
echo "Commiting OVP build"
git add . >> /dev/null
echo "Added everything to commit"
git commit -a -m "Build site" >> /dev/null
echo "Committed everything"
git push -q -u https://$KALT_GITHUB_ACCESS_TOKEN@github.com/kaltura/developer-platform-generated "HEAD:$BRANCH" # >> /dev/null 2>&1
echo "Pushed new site"
