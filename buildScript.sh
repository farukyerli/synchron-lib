echo "Working Directory ...."

VERSION =""

pwd
cp -pr src/lib/_images dist/_images
echo "Images Copied ...."
####################################################
### Increase Project Pacth Value in Main JSON File
# ./setVersion.sh
### Copy MainJSON to Library
cp package.json dist/
### Delete unnecessary keys from Library
jq 'del(.dependencies)' package.json >dist/package.json

####################################################
echo "package.json Copied ...."
cp src/lib/README.md dist/
echo "src/lib/README.md Copied ...."
cp src/lib/index.d.ts dist/
rm dist/index.d.js
echo "src/lib/index.d.ts Copied ...."

# gulp ile scss'ten css'e donusturulen dosyalar icin require satirlarinin duzeltilmesi gerekiyor.
for i in $(find ./dist/ -name "*.js"); do
    echo "modifying $i"
    sed -i "" "s/.scss/.css/g" $i
done

for i in $(find ./dist/ -name "*.js-e"); do
    echo "deleting $i"
    rm $i
done

rm -r src/_dist
cp -pr dist src/_dist
