import React, { useEffect } from 'react';
import './_assests/fontawesome/scss/fontawesome.scss';
import './_assests/fontawesome/scss/solid.scss';
import { RowUploadExample, ModalUploadExample } from './examples';
import DropzoneUploadExample from './examples/DropzoneUpload';

const ApiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbXIiOiJwd2QiLCJuYW1laWQiOiIwOGQ4ZGVmMS1kYzk0LTRlYTAtODk0Zi03MjQwMzhmMTljNDEiLCJlbWFpbCI6ImZhcnVreWVybGkrY29AZ21haWwuY29tIiwiY29tcGFueUlkIjoiMDhkOGRlZjEtZGM0Yi00MmM0LTgxMjgtN2I5MDhhODNlNjQyIiwiY29tcGFueU5hbWUiOiLQn9Cg0JjQktCQ0KLQndCVINCf0IbQlNCf0KDQmNCE0JzQodCi0JLQniBcItCQ0JLQotCeLSDQotCg0JXQmdCUXCIiLCJmdWxsTmFtZSI6ItCQ0LTQvNGW0L3RltGB0YLRgNCw0YLQvtGAINC60L7QvNC_0LDQvdGW0ZciLCJzdWIiOiIwOGQ1OTk3OC0xNTllLWMyM2EtZDJmMi00OGU5MTJjZDNmOWMiLCJqdGkiOiI3Mzc3ZDgxNy1hMjYwLTQ2ZWUtYWE5Yy1hMGI3NGQ4ODUyZDIiLCJpYXQiOiIxMC8wNy8yMDIxIDE2OjIxOjU4ICswMDowMCIsIm5iZiI6MTYzMzYyMzcxOCwiZXhwIjoxNjMzNjM4MTE4LCJpc3MiOiJodHRwOi8vd3d3LnN5bmNocm9uLnVhIiwiYXVkIjoiTWVydCBZZXJsaSJ9.JDq47yncjSQUGsAKrVvsjvKEhWjnQL614KV2MXzAj6Y'
const APP_URL = 'https://zz-web-dev.zozengo.com/api/web';
// const UPLOAD_URL = 'https://zz-web-dev.zozengo.com/api/web/Upload/08d8def1-dc4b-42c4-8128-7b908a83e642?documentDefinitionId=17e2e8af-d039-46a4-97ed-3e79b2fa5bf7';
const headers = {
    authorization: ApiKey,
}
const img = 'https://zz-web-dev.zozengo.com/api/web/Download/da6c5ee9-625b-4719-865f-59c037961d6e';
// const img = 'https://cloud.zozengo.com/index.php/s/RxT8XFPRsKDHGHB/download'
// const img='data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7';

const App = () => {

    useEffect(() => {
        // eslint-disable-next-line
    }, [])


    return (
        <div className="App">
            <div className="container" style={{ padding: 100 }}>
                <RowUploadExample connection={{ url: APP_URL, headers }} sampleImageURL={img} />

                <br />
                <br />
                <br />
                <DropzoneUploadExample connection={{ url: APP_URL, headers }} sampleImageURL={img} />
                <br />
                <br />
                <br />
                {/* <ModalUploadExample connection={{ url: APP_URL, headers }} sampleImageURL={img} /> */}
            </div>
            {/* <div style={{ width: '200px', height: '100%' }}>
                <DocIcon />
            </div> */}
        </div>
    );
};

export default App as any;
