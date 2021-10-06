import React, { useEffect } from 'react';
import { RowUpload } from './lib';
import './_assets/styles/main.scss';

const ApiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbXIiOiJwd2QiLCJuYW1laWQiOiIwOGQ4ZGVmMS1kYzk0LTRlYTAtODk0Zi03MjQwMzhmMTljNDEiLCJlbWFpbCI6ImZhcnVreWVybGkrY29AZ21haWwuY29tIiwiY29tcGFueUlkIjoiMDhkOGRlZjEtZGM0Yi00MmM0LTgxMjgtN2I5MDhhODNlNjQyIiwiY29tcGFueU5hbWUiOiLQn9Cg0JjQktCQ0KLQndCVINCf0IbQlNCf0KDQmNCE0JzQodCi0JLQniBcItCQ0JLQotCeLSDQotCg0JXQmdCUXCIiLCJmdWxsTmFtZSI6ItCQ0LTQvNGW0L3RltGB0YLRgNCw0YLQvtGAINC60L7QvNC_0LDQvdGW0ZciLCJzdWIiOiIwOGQ1OTk3OC0xNTllLWMyM2EtZDJmMi00OGU5MTJjZDNmOWMiLCJqdGkiOiJjNWZjY2U3OC05ZTY3LTRjNTItYTU1NC02MTVjMDdmM2MxZTUiLCJpYXQiOiIxMC8wNi8yMDIxIDEwOjU2OjUxICswMDowMCIsIm5iZiI6MTYzMzUxNzgxMSwiZXhwIjoxNjMzNTMyMjExLCJpc3MiOiJodHRwOi8vd3d3LnN5bmNocm9uLnVhIiwiYXVkIjoiTWVydCBZZXJsaSJ9.saDmet6veBS4thlJA6xFzQqgDjmkcO_8KqDL2SWzagk'
const APP_URL = 'https://zz-web-dev.zozengo.com/api/web/Upload/08d8def1-dc4b-42c4-8128-7b908a83e642';
// const UPLOAD_URL = 'https://zz-web-dev.zozengo.com/api/web/Upload/08d8def1-dc4b-42c4-8128-7b908a83e642?documentDefinitionId=17e2e8af-d039-46a4-97ed-3e79b2fa5bf7';
const headers = {
    authorization: ApiKey,
}
// const img = 'https://zz-web-dev.zozengo.com/api/web/Download/da6c5ee9-625b-4719-865f-59c037961d6e';
// const img = 'https://cloud.zozengo.com/index.php/s/RxT8XFPRsKDHGHB/download'
// const img='data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7';

const App = () => {

    useEffect(() => {
        // eslint-disable-next-line
    }, [])


    return (
        <div className="App">
            <div className="container" style={{ padding: 100 }}>

                <RowUpload
                    connection={{ url: APP_URL, headers }}

                    // title="Test Title"
                    upLoadText="Upload Document"
                    // files={[img]}
                    files={[]}
                    previewType="FullScreen"


                    skintype="row"
                    rowItems={{
                        // Column3: <>Deneme</>,
                        // Column4: '4.',
                        // Column6: ''
                    }}
                    text={{
                        DeleteButton: "Sil",
                        DownloadButton: "Indir",
                        UploadButton: "Yukle",
                        EditButton: "Degistir",
                        ViewButton: "Goster",
                        AbortButton: "Durdur"
                    }}

                    actions={{
                        View: (data) => console.log('View Pressed : ', data),
                        Delete: (data) => console.log('Delete Pressed : ', data),
                        Edit: (data) => console.log('Edit Pressed : ', data),
                        Download: (data) => console.log('Download Pressed : ', data),
                        Upload: (data) => console.log('Upload Pressed : ', data),

                        onSuccess: ((data) => { console.log('Success : ', data) }),
                        onAbort: (() => { console.log('Aborted') }),
                        onDelete: ((data) => { console.log('Deleted :', data) }),
                        onError: (s, d) => console.log('error:', s, d),
                    }}
                />
            </div>
        </div>
    );
};

export default App as any;
