Synchron React Component Packages

## Upload component

npm login

npm build

## scss isimlerini css xtentiona cevir
find dist/**/*.js -type f -exec sed -i -e 's/.scss/.css/g' *.js {} \;

cd dist

npm publish

Notlar: 
`npx npm-packlist` ile eklenmisler dosyalari kontrol et, eger ekli degillerse package.json-files kontrol et. `npx pack` ile paketle

ana dizine cikip 
find dist/**/*.js -type f -exec sed -i -e 's/.scss/.css/g' *.js {} \;
calistir


