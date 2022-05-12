import TableCell, { TableCellProps } from "@mui/material/TableCell";
import { ReactNode } from "react";

interface DTableCellProps {
    children?: ReactNode
    rawProps?: TableCellProps
}

export default function DTableCell(props: DTableCellProps) {
    return <TableCell {...props.rawProps}>
        {props.children}
    </TableCell>
}
