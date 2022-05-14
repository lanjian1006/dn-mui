import {Checkbox, TableRow} from "@mui/material";
import {ReactNode} from "react";
import TableCell, {TableCellProps} from "@mui/material/TableCell";

type Column = {
    field: string,
    fieldName: string,
    width?: number | string,
    fixed?: 'right' | 'left'
}

class TableRowData {
    [key: string]: any
}

interface DTableRowProps {
    children?: ReactNode
    columns?: Column[]
    rowData?: TableRowData
    type: 'head' | 'body'
    cellProps?: TableCellProps
    selected?: boolean
    hover?: boolean
    onClick?: () => void
    border?: boolean
    cellAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right',
    cellPadding?: 'checkbox' | 'none' | 'normal',
}

export default function DTableRow(props: DTableRowProps) {

    const cellSX = {
        borderRight: props.border ? 'solid 1px #ddd' : 'none',
        '&:last-child': {
            borderRight: 'none'
        }
    }

    return <TableRow
        selected={props.selected}
        hover={props.hover}
        onClick={props.onClick}
    >
        {
            <TableCell
                width={'38px'}
                padding={'checkbox'}
                align={'center'}
                sx={{
                    ...cellSX,
                    pr: '4px',
                    position: 'sticky',
                    right: '0px'
                }}
            >
                <Checkbox size={'small'}/>
            </TableCell>
        }
        {
            props.children ?? props.columns?.map((column) => <TableCell
                padding={props.cellPadding}
                align={props.cellAlign}
                width={column.width}
                sx={cellSX}
            >
                {
                    props.type === 'head' ? column.fieldName : props.rowData?.[column.field]
                }
            </TableCell>)
        }
    </TableRow>
}

export type{
    Column,
    TableRowData
}