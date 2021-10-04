import React, { useEffect } from 'react';
import UploadFiles from './lib/components/Upload_V2';
import './_assets/styles/main.scss';

const ApiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbXIiOiJwd2QiLCJuYW1laWQiOiIwOGQ3Yzg2OC03YjJkLTQ2NDgtODJkMi1lOGVkYjY4YTY0YjMiLCJlbWFpbCI6InRvQHpvemVuZ28uY29tIiwiY29tcGFueUlkIjoiMDhkN2M4NjgtN2IwZS00ODdiLTgwNmMtY2RlMjNkMWFlMzljIiwiY29tcGFueU5hbWUiOiJUTyBDb21wYW55IiwiZnVsbE5hbWUiOiJUcnVjayBDb21wYW55IC0iLCJzdWIiOiIwOGQ1OTk3OC0xNTllLWMyM2EtZDJmMi00OGU5MTJjZDNmOWMiLCJqdGkiOiIyNTA1ODVmMy0wMTE0LTQyMjMtOTU4Yi1hOWVmNWFhNWEzODEiLCJpYXQiOiIwOC8xNy8yMDIwIDIxOjA0OjQxICswMDowMCIsIm5iZiI6MTU5NzY5ODI4MSwiZXhwIjoxNTk3NzEyNjgxLCJpc3MiOiJodHRwOi8vd3d3LnN5bmNocm9uLnVhIiwiYXVkIjoiTWVydCBZZXJsaSJ9.BpHP6sVOx5kx-eAr10JeraZELCM1pcogKPbIfQoo2h8'
const APP_URL = 'https://zz-web-dev.zozengo.com/api/web/Upload/08d7c868-7b0e-487b-806c-cde23d1ae39c';
const headers = {
    authorization: ApiKey,
}
const img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png';

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


                    skintype="row"
                    rowItems={{
                        // Column3: <>Deneme</>,
                        // Column4: '4.',
                        // Column6: '6.'
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
