import axios from "axios";
import { DriveResponse } from "../types";

type FileServiceType = {
    getDriveData: (path: string) => Promise<DriveResponse[]>;
};

const FileService = (): FileServiceType => {
    
    const getDriveData = (path: string): Promise<DriveResponse[]> => {

        return new Promise<DriveResponse[]>(
            (resolve, reject) => {
                const data = {path};
                axios.post("/api/file", data)
                .then((res: any) => {
                    const result = res.data;
                    resolve(result || []);
                }).catch(reject);
            }
        );
    };

    return {
        getDriveData
    };
};

export default FileService;