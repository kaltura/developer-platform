set -e
BRANCH=`curl https://api.github.com/repos/kaltura/clients-generator -s |grep default_branch| sed 's/\s*"default_branch":\s*"\(.*\)",/\1/'`
curl -f "https://raw.githubusercontent.com/kaltura/clients-generator/$BRANCH/support_matrix.md" > ./markdown/generated/support_matrix.md
