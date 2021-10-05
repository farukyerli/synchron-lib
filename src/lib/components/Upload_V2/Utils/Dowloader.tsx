import { IConnections } from '../type';
interface IProps {
    connection: IConnections;
    file: string;
    type?: string;
}

export default async (props: IProps) => {
    console.log('Downloader', props.connection.headers);
    // return null;
    let _returnValue = '';
    if (props.file === undefined) return _returnValue;

    // useEffect(() => {
    //     console.log('Download Mounted');
    //     return () => console.log('Download Unmounted');
    // }, []);

    // const response = await fetch(props.file, { headers: { ...props.connection.headers } })
    //     .then(response => response.blob())
    //     .then((myBlob) => {
    //         const objectURL = URL.createObjectURL(myBlob);
    //         return objectURL;
    //     })
    //     .catch(err => err)

    const request = new XMLHttpRequest();
    let response;

    const fetchFile = () => {
        // request.open('GET')
    }


    return response

};
