type ListItemProps = {
    id: string;
    text: string;
    handleOnClick: (key: string, text: string) => void;
    className?: string;
};

export const ListItem = (props: ListItemProps) => {
    
    const {id, text} = props;

    const onItemClick = (event: any) => {
        props.handleOnClick && props.handleOnClick(id, text);
    };


    return (
        <li 
            className={props.className}
            onClick={onItemClick}>
            {text}
        </li>
    );

};

