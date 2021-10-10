git checkout -B deploy/github
rm *.sh
rm Gulpfile.js
rm Gulpfile.js-e
rm typesPackage.json
rm src/key.ts
git add .
git commit -m "deploy commit"
git push github

git checkout dev/ua
