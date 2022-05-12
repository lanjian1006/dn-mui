import { TableRow } from "@mui/material";
import { ReactNode } from "react";

interface DTableRowProps{
    children?: ReactNode
}

export default function DTableRow(props: DTableRowProps){
    return <TableRow>
        {props.children}
    </TableRow>
}