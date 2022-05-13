import {TableRow} from "@mui/material";
import {ReactNode} from "react";
import DTableCell from "./DTableCell";
import {TableCellProps} from "@mui/material/TableCell";

type Column = {
    fieldName?: string,
}

interface DTableRowProps {
    children?: ReactNode
    columns?: Column[]
    tableCellProps?: TableCellProps
}

export default function DTableRow(props: DTableRowProps) {
    return <TableRow>
        {props.children ?? props.columns?.map((item, index) => <DTableCell rawProps={props.tableCellProps}>
            {item.fieldName}
        </DTableCell>)}
    </TableRow>
}

export type{
    Column
}