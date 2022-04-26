import Collapse from "@mui/material/Collapse";
import DMenuItem from "./DMenuItem";
import {ReactNode, useState} from "react";

interface DSubMenuProps {
    children?: ReactNode
}

export function DSubMenu(props: DSubMenuProps) {
    const [open, setOpen] = useState(false)
    return <>
        <DMenuItem></DMenuItem>
        <Collapse in={open}>
            {
                props.children
            }
        </Collapse>
    </>
}