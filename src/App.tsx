import React, { useEffect } from 'react';
import UploadFiles from './lib/components/Upload_V2';
import './_assets/styles/main.scss';

const ApiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbXIiOiJwd2QiLCJuYW1laWQiOiIwOGQ4ZGVmMS1kYzk0LTRlYTAtODk0Zi03MjQwMzhmMTljNDEiLCJlbWFpbCI6ImZhcnVreWVybGkrY29AZ21haWwuY29tIiwiY29tcGFueUlkIjoiMDhkOGRlZjEtZGM0Yi00MmM0LTgxMjgtN2I5MDhhODNlNjQyIiwiY29tcGFueU5hbWUiOiLQn9Cg0JjQktCQ0KLQndCVINCf0IbQlNCf0KDQmNCE0JzQodCi0JLQniBcItCQ0JLQotCeLSDQotCg0JXQmdCUXCIiLCJmdWxsTmFtZSI6ItCQ0LTQvNGW0L3RltGB0YLRgNCw0YLQvtGAINC60L7QvNC_0LDQvdGW0ZciLCJzdWIiOiIwOGQ1OTk3OC0xNTllLWMyM2EtZDJmMi00OGU5MTJjZDNmOWMiLCJqdGkiOiIxNjgyNTEyNC1mOTU0LTQ4NmEtYmY4Yi1lYzFiMTcwNzgxMmUiLCJpYXQiOiIxMC8wNS8yMDIxIDEyOjI3OjA5ICswMDowMCIsIm5iZiI6MTYzMzQzNjgyOSwiZXhwIjoxNjMzNDUxMjI5LCJpc3MiOiJodHRwOi8vd3d3LnN5bmNocm9uLnVhIiwiYXVkIjoiTWVydCBZZXJsaSJ9.b7RcpQu-KcScUSkKtB7pwXxhKUP-V1A0EJ3FYNiylxw'
const APP_URL = 'https://zz-web-dev.zozengo.com/api/web/Upload/08d7c868-7b0e-487b-806c-cde23d1ae39c';
const headers = {
    authorization: ApiKey,
}
const img = 'https://zz-web-dev.zozengo.com/api/web/Download/2682837d-4189-470d-8b36-031549b2222c';
// const img = 'https://cloud.zozengo.com/index.php/s/RxT8XFPRsKDHGHB/download'
// const img='data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7';

const App = () => {

    useEffect(() => {
        // eslint-disable-next-line
    }, [])


    return (
        <div className="App">
            <div className="container" style={{ padding: 100 }}>
                {/* <UploadFiles
                    connection={{ url: APP_URL, headers }}
                    dropzone
                    multiUpload
                    onSuccess={((data) => { console.log('Success : ', data) })}
                    onAbort={(() => { console.log('Aborted') })}
                    onDelete={((error) => { console.log('Deleted :', error) })}
                    onError={(e, s) => console.log('error:', e, s)}
                    // title="Test Title"
                    upLoadText="Upload Document"
                    files={[img]}
                    previewType="FullScreen"
                // dropzoneButton
                /> */}

                <UploadFiles
                    connection={{ url: APP_URL, headers }}
                    onSuccess={((data) => { console.log('Success : ', data) })}
                    onAbort={(() => { console.log('Aborted') })}
                    onDelete={((error) => { console.log('Deleted :', error) })}
                    onError={(e, s) => console.log('error:', e, s)}
                    // title="Test Title"
                    upLoadText="Upload Document"
                    files={[img]}
                    previewType="FullScreen"

                    text={{
                        DeleteButton: "Sil",
                        DownloadButton: "Indir",
                        UploadButton: "Yukle",
                        EditButton: "Degistir",
                        ViewButton: "Goster"
                    }}
                    skintype="row"
                    rowItems={{
                        // Column3: <>Deneme</>,
                        // Column4: '4.',
                        // Column6: ''
                    }}
                    actionButtons={{
                        View: (data) => console.log('View Pressed : ', data),
                        Delete: (data) => console.log('Delete Pressed : ', data),
                        Edit: (data) => console.log('Edit Pressed : ', data),
                        Download: (data) => console.log('Download Pressed : ', data),
                        Upload: (data) => console.log('Upload Pressed : ', data),
                    }}
                />
            </div>
        </div>
    );
};

export default App as any;
