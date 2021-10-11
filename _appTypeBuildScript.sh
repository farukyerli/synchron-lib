echo "Working Directory ...."
pwd
mkdir dist/types
mkdir dist/types/Upload

### Copy MainJSON to Library
cp typesPackage.json dist/types/package.json

####################################################
echo "package.json Copied ...."
# npx -p typescript tsc dist/app/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir dist/app
cp src/lib/index.d.ts dist/types/
echo "src/lib/index.d.ts Copied ...."

cp src/lib/Upload/types.ts dist/types/Upload/
echo "types Copied ...."

mkdir -p src/_dist/types
cp -pr dist/types src/_dist/

./_setTypesVersion.sh
