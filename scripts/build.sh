mkdir ./markdown/generated

echo "Building OVP Website..."
git clone https://github.com/kaltura/developer-platform-generated generated/ovp
full_prerender=0
if git log -1 --pretty=format:'%s' |grep -iq "[full build]"; then
  rm -rf generated/ovp/*
  full_prerender=1
  echo "Full build requested. All docs will be rendered anew."
fi
TARGET_API=ovp ./scripts/resources/all.sh
TARGET_API=ovp FULL_PRERENDER=$full_prerender lucybot build --prerender --destination generated/ovp
