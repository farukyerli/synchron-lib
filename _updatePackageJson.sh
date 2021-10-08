#!/bin/bash
VERSION=$(jq '.version' package.json)
VERSION=$(echo $VERSION | sed 's/"//g')

newJSON=$(jq --arg VERSION "$VERSION" '.dependencies."@equalizer/synchron-lib"=$VERSION' package.json)
echo $newJSON | jq >package.json

newJSON=$(jq --arg VERSION "$VERSION" '.dependencies."@equalizer/synchron-lib-types"=$VERSION' package.json)
# echo $newJSON | jq
echo $newJSON | jq >package.json

newJSON=$(jq --arg VERSION "$VERSION" '.peerDependencies."@equalizer/synchron-lib-types"=$VERSION' package.json)
# echo $newJSON | jq
echo $newJSON | jq >package.json

echo "New Version of \"@equalizer/synchron-lib\" set to package.json : " $VERSION

npm install @equalizer/synchron-lib @equalizer/synchron-lib-types
