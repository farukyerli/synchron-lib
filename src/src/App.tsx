import React, { useEffect } from 'react';
import './_assests/fontawesome/scss/fontawesome.scss';
import './_assests/fontawesome/scss/solid.scss';
import {
    RowUploadExample,
    DropzoneUploadExample,
    // DownloadFileExample,
    ShowImageExample
} from './examples';
import APIKEY from './key';

const ApiKey = APIKEY();
const APP_URL = 'https://zz-web-dev.zozengo.com/api/web';
const headers = {
    authorization: ApiKey,
}
const img = 'https://zz-web-dev.zozengo.com/api/web/Download/1da73db0-66f3-47e3-b5f9-4f51dd5e142c ';
// const img = 'https://zz-web-dev.zozengo.com/api/web/Download/fc4fb6e8-2455-4cba-a621-42ea31a376f3';

const imgList = [
    // 'https://zz-web-dev.zozengo.com/api/web/Download/2682837d-4189-470d-8b36-031549b2222c',
    'https://zz-web-dev.zozengo.com/api/web/Download/1da73db0-66f3-47e3-b5f9-4f51dd5e142c',
    'https://zz-web-dev.zozengo.com/api/web/Download/6d869e6c-38cc-4bf4-a0a1-9a0a29afcaaf ',
    'https://zz-web-dev.zozengo.com/api/web/Download/85507e4a-d017-4fd2-a807-19991879a25b'
    // 'https://zz-web-dev.zozengo.com/api/web/Download/ae9c1013-36cd-4ad5-86b7-7e0cf5397e3d'
]
const App = () => {
    // TODO: Thumbnail icin kucuk olan resimleri fit yap
    // TODO: Modal Upload koponentini hazirla
    // TODO: DownloadFile icin multiple downloda izin ver
    // TODO: Tum upload olaylarinda blob image adini ver
    // TODO: Preview yerine image blob linki secmeli olsun
    // TODO: 
    // TODO: 
    // TODO: 

    useEffect(() => {
        // eslint-disable-next-line
    }, [])


    return (
        <div className="App">
            <div className="container" >
                <RowUploadExample connection={{ url: APP_URL, headers }} sampleImageURL={img} />
                {/* <br />
                <br />
                <br /> */}
                <DropzoneUploadExample connection={{ url: APP_URL, headers }} sampleImageURL={imgList} />
                <br />
                <br />
                {/* <br /> */}
                {/* <br /> */}
                <ShowImageExample connection={{ url: APP_URL, headers }} sampleImageURL={img + 's'} />
                <ShowImageExample connection={{ url: APP_URL, headers }} sampleImageURL={img} />
                {/* <DownloadFileExample connection={{ url: APP_URL, headers }} sampleImageURL={img} /> */}
                {/* <ModalUploadExample connection={{ url: APP_URL, headers }} sampleImageURL={img} /> */}
            </div>
        </div>
    );
};

export default App as any;
