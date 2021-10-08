#!/bin/bash
VERSION=$(jq '.version' package.json)
VERSION=$(echo $VERSION | sed 's/"//g')

newJSON=$(jq --arg VERSION "$VERSION" '.version=$VERSION' dist/types/package.json)
# echo $newJSON | jq
echo $newJSON | jq >dist/types/package.json

echo "New Version set to package.json : " $VERSION
