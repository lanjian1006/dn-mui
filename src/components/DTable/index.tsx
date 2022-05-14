import {Table, TableBody, TableHead} from "@mui/material";
import DTableRow, {Column, TableRowData} from "./DTableRow";
import DTableToolBar from "./DTableToolBar";
import {useState} from "react";

interface DTableProps {
    columns: Column[]
    dataSource?: TableRowData[],
    cellAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right',
    cellPadding?: 'none' | 'normal',
    size?: 'small' | 'medium',
    hover?: boolean,
    stickyHeader?: boolean,
    maxRows?: number,
    border?: boolean
}

export default function DTable(props: DTableProps) {
    const [selectedRows, setSelectedRows] = useState<number[] | string[]>()

    return <Table size={props.size} stickyHeader={props.stickyHeader}>
        <TableHead>
            {/*<DTableToolBar columnCount={props.columns.length} />*/}
            <DTableRow
                type={'head'}
                columns={props.columns}
                border={props.border}
                cellPadding={props.cellPadding}
                cellAlign={props.cellAlign}
            />
        </TableHead>
        <TableBody>
            {
                props.dataSource?.map(row => {
                    return <DTableRow
                        type={'body'} columns={props.columns} rowData={row}
                        hover={props.hover}
                        border={props.border}
                        cellPadding={props.cellPadding}
                        cellAlign={props.cellAlign}

                    />
                })
            }
        </TableBody>
    </Table>
}