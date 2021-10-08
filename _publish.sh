#!/bin/bash
export NPM_TOKEN=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
cd dist/app
npm publish
cd ..
cd types
npm publish
cd ..
cd ..
pwd
./_updatePackageJson.sh
