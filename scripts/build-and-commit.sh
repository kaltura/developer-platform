#!/bin/bash
set -ex

git config --global user.name "Travis CI"
git config --global user.email "jess.portnoy@kaltura.com"

mkdir ./markdown/generated

echo "Building OVP Website..."
GEN_DIR=generated/ovp
BRANCH="${GITHUB_REF##*/}"
git clone https://github.com/kaltura/developer-platform-generated "$GEN_DIR"
cd "$GEN_DIR"
git checkout "$BRANCH"
git pull origin "$BRANCH"
cd ../..
full_prerender=0
if git log -1 --pretty=format:'%s' |grep -iq "[full build]"; then
  rm -rf generated/ovp/*
  full_prerender=1
  echo "Full build requested. All docs will be rendered anew."
fi
TARGET_API=ovp ./scripts/resources/all.sh
TARGET_API=ovp FULL_PRERENDER=$full_prerender lucybot build --prerender --destination "$GEN_DIR"
echo "Commiting OVP build"
git add . >> /dev/null
echo "Added everything to commit"
git commit -a -m "Build site" >> /dev/null
echo "Committed everything"
git push -q -u "https://$KALT_GITHUB_ACCESS_TOKEN@github.com/kaltura/developer-platform-generated" "HEAD:$BRANCH" # >> /dev/null 2>&1
echo "Pushed new site"
