export const deepCopy = <T>(objectValue: T): T => {
    // console.log('deepCopy objectValue', objectValue);
    return objectValue ? JSON.parse(JSON.stringify(objectValue)) : objectValue;
};