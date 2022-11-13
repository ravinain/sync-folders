import { FormControl, InputGroup } from "react-bootstrap";
import "./DirectoryContainer.scss";
import FileService from '../service/FileService';
import { useState } from "react";
import { DriveResponse } from "../types";
import { ListItem } from "./common/ListItem";

type DirectoryContainerProps = {
    label: string;
};

export const DirectoryContainer = (props: DirectoryContainerProps) => {
    
    const { getDriveData } = FileService();
    const [data, setData] = useState<DriveResponse[]>([]);
    const [path, setPath] = useState<string>("/");

    const fetchData = (path: string): void => {
        setPath(path);
        getDriveData(path).then((res) => {
            setData(res);
        }).catch((err) => {
            console.log("Error: ", err);
        });
    };

    const onPathChange = (event: any): void => {
        
        if (event.keyCode === 13) {
            const path = event.target.value;
            fetchData(path);
        }
        
    };

    const onItemClick = (id: string, text: string): void => {
        fetchData(path + "/" + id);
    };


    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="pathLabel">{props.label}</InputGroup.Text>
                <FormControl
                    placeholder={"Enter " + props.label}
                    aria-label="path"
                    aria-describedby="pathLabel"
                    onKeyUp={onPathChange}
                />
            </InputGroup>
            <div className="result-container">
                <ul>
                    {
                        data.map(driveData => 
                            <ListItem 
                                id={driveData.name}
                                text={driveData.name}
                                className={driveData.isDirectory ? "drive" : "file"}
                                handleOnClick={onItemClick} />)
                    }
                </ul>
            </div>
        </div>
    );

}