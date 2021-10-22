mkdir ./markdown/generated

TARGET_API=ovp ./scripts/resources/all.sh
TARGET_API=ovp FULL_PRERENDER=$full_prerender lucybot build --prerender --destination generated/ovp
