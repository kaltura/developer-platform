#!/bin/bash - 
#===============================================================================
#          FILE: 1.sh
#         USAGE: ./1.sh 
#   DESCRIPTION: 
#       OPTIONS: ---
#  REQUIREMENTS: ---
#          BUGS: ---
#         NOTES: ---
#        AUTHOR: Jess Portnoy <jess.portnoy@kaltura.com>
#  ORGANIZATION: Kaltura, inc.
#       CREATED: 15/03/21 13:50:40 GMT
#      REVISION:  ---
#===============================================================================

#set -o nounset                              # Treat unset variables as an error
if [ $# lt 7];then
    echo "This will result in a parse err"
fi

