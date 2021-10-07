#!/bin/bash
VERSION=$(jq '.version' package.json)
VERSION=$(echo $VERSION | sed 's/"//g')
arrIN=(${VERSION//./ })
MAJOR=${arrIN[0]}
MINOR=${arrIN[1]}
PATCH=${arrIN[2]}

NEWVERSION=$(echo $MAJOR.$MINOR.$((PATCH + 1)))
echo $NEWVERSION

# jq --arg NEWVERSION "$NEWVERSION" '.version=$NEWVERSION' package.json

newJSON=$(jq --arg NEWVERSION "$NEWVERSION" '.version=$NEWVERSION' package.json)
echo $newJSON | jq >package.json
