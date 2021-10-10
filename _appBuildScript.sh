echo "Working Directory ...."

pwd
cp src/lib/_images dist/app/_images
echo "Images Copied ...."
####################################################
### Increase Project Pacth Value in Main JSON File
if [ "$1" = "+" ]; then
    ./_setVersion.sh
else
    echo "Version NOT updated"
fi
### Copy MainJSON to Library
cp package.json dist/app/
### Delete unnecessary keys from Library
jq 'del(.dependencies)' package.json >dist/app/package.json

####################################################
echo "package.json Copied ...."
cp src/lib/README.md dist/app/
echo "src/lib/README.md Copied ...."
# npx -p typescript tsc dist/app/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir dist/app
# cp src/lib/index.d.ts dist/app/
rm dist/app/index.d.js
echo "src/lib/index.d.ts Copied ...."

# cp src/lib/Upload/types.ts dist/app/Upload/
echo "types Copied ...."

# gulp ile scss'ten css'e donusturulen dosyalar icin require satirlarinin duzeltilmesi gerekiyor.
for i in $(find ./dist/app/ -name "*.js"); do
    echo "modifying $i"
    sed -i "" "s/.scss/.css/g" $i
done

# Uretilen Hata dosyalarini temizle
for i in $(find ./dist/app/ -name "*.js-e"); do
    echo "deleting $i"
    rm $i
done

rm -r src/_dist
mkdir -p src/_dist/app
cp -pr dist/app src/_dist/app
