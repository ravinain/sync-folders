import * as fs from 'fs/promises';
import { DriveResponse } from '../types.js';

const FileService = () => {

    const sortByTypeAndName = (a: DriveResponse, b: DriveResponse): number => {

        if (a.isDirectory && b.isFile) {
            return -1;
        }

        if (a.isFile && b.isDirectory) {
            return 1;
        }

        if ((a.isDirectory && b.isDirectory) || (a.isFile && b.isFile)) {
            const aName = a.name.toUpperCase();
            const bName = b.name.toUpperCase();

            return aName > bName ? 1 : aName < bName ? -1 : 0;
        }

        return 0;
    };

    const getDriveItems = async (path: string): Promise<DriveResponse[]> => {
        const dir = await fs.readdir(path, {withFileTypes: true});
        const directoryNames: DriveResponse[] = [];

        for await (const dirent of dir) {
            const {name} = dirent;
            directoryNames.push({
                name, 
                isFile: dirent.isFile(), 
                isDirectory: dirent.isDirectory()
            });
        }

        return directoryNames.sort(sortByTypeAndName);
    };

    return {
        getDriveItems
    };
};

export default FileService;