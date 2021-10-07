#!/bin/bash
VERSION=$(jq '.version' package.json)
VERSION=$(echo $VERSION | sed 's/"//g')

DEPENDICIES=$(jq '.dependencies."synchron-lib"' package.json)

newJSON=$(jq --arg VERSION "$VERSION" '.dependencies."synchron-lib"=$VERSION' package.json)
# echo $newJSON | jq
echo $newJSON | jq >package.json

echo "New Version of \"synchron-lib\" set to package.json : " $VERSION

npm install synchron-lib
