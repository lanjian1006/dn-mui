import {ListItem, ListItemButton, ListItemIcon, ListItemProps} from "@mui/material";
import {ReactNode} from "react";

interface DMenuProps extends ListItemProps{
    prefixIcon?: ReactNode
    content?: ReactNode
}

export default function DMenuItem (props: DMenuProps) {
    return <ListItem>
        <ListItemButton>
            <ListItemIcon>
                {props.prefixIcon}
            </ListItemIcon>
            {
                props.content
            }
        </ListItemButton>
    </ListItem>
}
