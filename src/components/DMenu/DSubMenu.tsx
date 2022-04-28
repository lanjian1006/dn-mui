import Collapse from "@mui/material/Collapse";
import DMenuItem, { DMenuItemProps } from "./DMenuItem";
import React, { ReactNode, useState } from "react";

interface DSubMenuProps {
    children?: ReactNode
    prefixIcon?: ReactNode
    primary?: string
}

export function DSubMenu(props: DSubMenuProps) {
    const [open, setOpen] = useState(false)
    const handleClick = (e: React.MouseEvent) => {
        setOpen(!open)
    }
    return <>
        <DMenuItem
            handleClick={handleClick}
            prefixIcon={props.prefixIcon}
            primary={props.primary} />
        <Collapse in={open}>
            {
                props.children
            }
        </Collapse>
    </>
}