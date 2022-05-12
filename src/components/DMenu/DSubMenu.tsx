import Collapse from "@mui/material/Collapse";
import DMenuItem, { DMenuItemProps } from "./DMenuItem";
import React, { ReactNode, useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Box } from "@mui/material";

interface DSubMenuProps {
    children?: ReactNode
    prefixIcon?: ReactNode
    primary?: string
    handleClick?: (e: React.MouseEvent) => void
}

export function DSubMenu(props: DSubMenuProps) {
    const [open, setOpen] = useState(false)
    const handleClick = (e: React.MouseEvent) => {
        setOpen(!open)
        props.handleClick?.(e)
    }
    const postIcons =  open ? <ExpandLess /> : <ExpandMore />
    
    return <>
        <DMenuItem
            handleClick={handleClick}
            prefixIcon={props.prefixIcon}
            primary={props.primary} 
            postIcon={postIcons}/>
        <Collapse in={open}>
            <Box sx={{pl: 2}}>
                {
                    props.children
                }
            </Box>
        </Collapse>
    </>
}