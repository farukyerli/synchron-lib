#!/bin/bash
export NPM_TOKEN=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
cd dist
npm publish
cd ..

./_updatePackageJson.sh
