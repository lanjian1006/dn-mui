import Collapse from "@mui/material/Collapse";
import DMenuItem from "./DMenuItem";
import React, { ReactNode, useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Box } from "@mui/material";

interface DSubMenuProps {
    children?: ReactNode
    prefixIcon?: ReactNode
    primary?: string
    handleClick?: (id: any) => void
    selected?: boolean
    id?: any
}

export function DSubMenu(props: DSubMenuProps) {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
        props.handleClick?.(props.id ?? props.primary)
    }
    const postIcons =  open ? <ExpandLess /> : <ExpandMore />
    
    return <>
        <DMenuItem
            handleClick={handleClick}
            prefixIcon={props.prefixIcon}
            primary={props.primary} 
            postIcon={postIcons}
            selected={props.selected}
        />
        <Collapse in={open}>
            <Box sx={{pl: 2}}>
                {
                    props.children
                }
            </Box>
        </Collapse>
    </>
}