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
