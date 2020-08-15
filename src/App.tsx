import React from 'react';
import { UploadFiles } from './lib';


const ApiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbXIiOiJwd2QiLCJuYW1laWQiOiIwOGQ3Yzg2OC03YjJkLTQ2NDgtODJkMi1lOGVkYjY4YTY0YjMiLCJlbWFpbCI6InRvQHpvemVuZ28uY29tIiwiY29tcGFueUlkIjoiMDhkN2M4NjgtN2IwZS00ODdiLTgwNmMtY2RlMjNkMWFlMzljIiwiY29tcGFueU5hbWUiOiJUTyBDb21wYW55IiwiZnVsbE5hbWUiOiJUcnVjayBDb21wYW55IC0iLCJzdWIiOiIwOGQ1OTk3OC0xNTllLWMyM2EtZDJmMi00OGU5MTJjZDNmOWMiLCJqdGkiOiI1MDc3NWYxNi1kYjdkLTQ2ODMtODQ0NC1mZmQyZDVmYTc2NzMiLCJpYXQiOiIwOC8xMy8yMDIwIDA5OjUxOjE3ICswMDowMCIsIm5iZiI6MTU5NzMxMjI3NywiZXhwIjoxNTk3MzI2Njc3LCJpc3MiOiJodHRwOi8vd3d3LnN5bmNocm9uLnVhIiwiYXVkIjoiTWVydCBZZXJsaSJ9.zhGAffD2me5j1dM8ks_erf-l0mEUw_5JEPYZZPW79fc'
const APP_URL = 'https://zz-web-dev.zozengo.com/api/web/Upload/08d7c868-7b0e-487b-806c-cde23d1ae39c';
const headers = {
  authorization: ApiKey,
}


const App = () => {
    return (
        <div className="App">
            <div className="container" style={{padding: 100}}>
                <UploadFiles
                    connection={{ url: APP_URL, headers }}
                    dropzone
                    multiUpload
                    onSuccess={((data) => { console.log('Success : ', data) })}
                    onAbort={(() => { console.log('Aborted') })}
                    onDelete={((error) => { console.log('Deleted :', error) })}
                    onError={(e, s) => console.log('error:', e, s)}
                // dropzoneButton
                />
            </div>
        </div>
    );
};

export default App as any;
