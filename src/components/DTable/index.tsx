import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/material/styles';
import Table, {TableProps} from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {TableCellProps} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow, {TableRowProps} from '@mui/material/TableRow';
import React, {ReactNode, useState} from "react";
import Paper from "@mui/material/Paper";

interface DTableColumn {
    field: string
    headerName: string
    sortable?: boolean
    width?: string | number | undefined
    description?: string
}

type DTableRow = {
    id: string | number
    [key: string]: any | DTableRow
}

interface DTableProps extends TableProps {
    columns: DTableColumn[]
    src: DTableRow[]
    enableBorder?: boolean,
    enableCheck?: boolean,
    align?: "inherit" | "left" | "center" | "right" | "justify",
    customActions?: ReactNode
    onDelete?: (checkList: Array<string | number>) => void
}

interface DTableRowProps extends TableRowProps {
    showActions?: boolean
}

const StyledTableCell = styled(TableCell)<TableCellProps & { enableBorder?: boolean }>((props) => ({
    borderRight: props.enableBorder ? `solid 1px ${props.theme.palette.grey["300"]}` : '',
    '&:last-child': {
        borderRight: 'none'
    }
}))

const StyledTableRow = styled(TableRow)<DTableRowProps>((props) => ({
    background: props.theme.palette.grey["200"]
}))

export default function DTable(props: DTableProps) {
    const {enableBorder} = props
    const [checkList, setCheckList] = useState<Array<string | number>>([])
    const [checkAll, setCheckAll] = useState<boolean>(false)

    const onChange = (id: string | number) => {
        let newCheckList: Array<typeof id> = [...checkList]
        const index = checkList.indexOf(id)
        if (index === -1) {
            newCheckList.splice(0, -1, id)
        } else {
            newCheckList.splice(index, 1)
        }
        setCheckList(newCheckList)
    }

    const onCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCheck = event.target.checked
        let newCheckList: Array<string | number> = []
        if (newCheck) {
            newCheckList = props.src.map(row => row.id)
        }
        setCheckList(newCheckList)
        setCheckAll(newCheck)
    }

    const onDelete = () => {
        props.onDelete && props.onDelete(checkList)
    }

    return <Table
        size={props.size}
        stickyHeader={props.stickyHeader}
        sx={props.sx}
        padding={props.padding}
    >
        <TableHead>
            <StyledTableRow showActions={checkList.length > 0}>
                {
                    props.enableCheck && <StyledTableCell
                        width={40}
                        enableBorder={checkList.length === 0 && enableBorder}
                        align={props.align}
                    >
                        <Checkbox
                            size={'small'}
                            checked={checkAll}
                            indeterminate={checkAll && props.src.length !== checkList.length}
                            onChange={onCheckAll}
                        />
                    </StyledTableCell>
                }
                {
                    checkList.length > 0 ?
                        <StyledTableCell
                            enableBorder={checkList.length === 0 && enableBorder}
                            colSpan={props.columns.length}
                        >
                            <IconButton>
                                <DeleteIcon onClick={onDelete}/>
                                {
                                    props.customActions
                                }
                            </IconButton>
                        </StyledTableCell> :
                        props.columns.map((column) => (
                            <StyledTableCell
                                width={column.width}
                                enableBorder={enableBorder}
                                align={props.align}
                            >
                                {
                                    column.headerName
                                }
                            </StyledTableCell>
                        ))
                }
            </StyledTableRow>
        </TableHead>
        <TableBody>
            {
                props.src.map((row) => (
                    <TableRow
                        selected={checkList.indexOf(row.id) !== -1}
                        onClick={() => props.enableCheck && onChange(row.id)}
                    >
                        {
                            props.enableCheck && <StyledTableCell
                                enableBorder={enableBorder}
                                align={props.align}
                                width={40}
                            >
                                <Checkbox
                                    size={'small'}
                                    checked={checkList.indexOf(row.id) !== -1}
                                    onChange={() => onChange(row.id)}/>
                            </StyledTableCell>
                        }
                        {
                            props.columns.map((column) => (
                                <StyledTableCell
                                    width={column.width}
                                    enableBorder={enableBorder}
                                    align={props.align}
                                >
                                    {
                                        row[column.field]
                                    }
                                </StyledTableCell>
                            ))
                        }
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
}

export type {
    DTableColumn,
    DTableProps
}