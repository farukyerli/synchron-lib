export interface IFiles {
    laslastModified: number | null;
    lastModifiedDate: Date | null;
    name: string | null;
    size: number | null;
    type: string | null;
}
export interface IConnections {
    url: string;
    headers?: any;
}
