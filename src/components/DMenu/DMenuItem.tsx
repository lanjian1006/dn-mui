import { ListItemText } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import React, {ReactNode} from "react";

interface DMenuItemProps{
    prefixIcon?: ReactNode
    postIcon?: ReactNode
    primary?: string
    handleClick?: (e: React.MouseEvent) => void
}

export default function DMenuItem (props: DMenuItemProps) {
    return <ListItem>
        <ListItemButton onClick={props.handleClick}>
            <ListItemIcon>
                {props.prefixIcon}
            </ListItemIcon>
            <ListItemText primary={props.primary} />
            {props.postIcon}
        </ListItemButton>
    </ListItem>
}

export type{
    DMenuItemProps
}