import {ListItemText} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import React, {ReactNode} from "react";

interface DMenuItemProps {
    prefixIcon?: ReactNode
    postIcon?: ReactNode
    primary?: string
    handleClick?: (id: any) => void
    selected?: boolean
    id?: any
}

export default function DMenuItem(props: DMenuItemProps) {
    const handleClick = () => {
        props.handleClick?.(props.id ?? props.primary)
    }

    return <ListItem sx={{padding: '2px 0px'}}>
        <ListItemButton onClick={handleClick} selected={props.selected}>
            <ListItemIcon>
                {props.prefixIcon}
            </ListItemIcon>
            <ListItemText primary={props.primary}/>
            {props.postIcon}
        </ListItemButton>
    </ListItem>
}

export type{
    DMenuItemProps
}