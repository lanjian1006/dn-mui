import {
    Box, BoxProps, Checkbox, IconButton,
    styled,
    Table,
    TableProps,
    TableBody,
    TableCell,
    TableCellProps,
    TableContainer,
    TableHead,
    TableRow, TableRowProps
} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React, {useState} from "react";

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
    align?: "inherit" | "left" | "center" | "right" | "justify"
}

interface TableOpsProps extends BoxProps{
    padding?: 'checkbox' | 'none' | 'normal'
    size?: 'medium' | 'small' | string
    enableBorder?: boolean,
}

const StyledTableCell = styled(TableCell)<TableCellProps & { enableBorder?: boolean }>((props) => ({
    border: props.enableBorder ? `solid 1px ${props.theme.palette.grey["300"]}` : '',
}))

const StyledTableHeader = styled(TableRow)<TableRowProps>((props) => ({
    backgroundColor: props.theme.palette.grey["200"],
}))

const StyledTableOpsHeader = styled(Box)<TableOpsProps>((props) => ({
    backgroundColor: props.theme.palette.primary.light,
    padding: `${props.padding === 'none'? 'none' : props.padding === 'checkbox' ? '0 4px' : '8px 16px'}`,
    border: props.enableBorder ? `solid 1px ${props.theme.palette.grey["300"]}` : '',
    borderBottom: 'none'
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

    return <Box>
        <TableContainer>
            {
                props.enableCheck && checkList.length > 0 &&
                <StyledTableOpsHeader padding={props.padding} enableBorder={props.enableBorder} size={props.size}>
                    <Checkbox
                        checked={checkAll}
                        indeterminate={checkAll && props.src.length !== checkList.length}
                        onChange={onCheckAll}
                        size={'small'}
                    />
                    <IconButton>
                        <DeleteOutlineIcon/>
                    </IconButton>
                </StyledTableOpsHeader>
            }
            <Table
                size={props.size}
                stickyHeader={props.stickyHeader}
                sx={props.sx}
                padding={props.padding}
            >
                {
                    checkList.length === 0 &&
                    <TableHead>
                        <StyledTableHeader>
                            {
                                props.enableCheck &&
                                <StyledTableCell
                                    width={40}
                                    enableBorder={enableBorder}
                                    align={props.align}
                                >
                                    <Checkbox
                                        checked={checkAll}
                                        indeterminate={checkAll && props.src.length !== checkList.length}
                                        onChange={onCheckAll}
                                        size={'small'}
                                    />
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
                                            column.headerName
                                        }
                                    </StyledTableCell>
                                ))
                            }
                        </StyledTableHeader>
                    </TableHead>
                }
                <TableBody>
                    {
                        props.src.map((row) => (
                            <TableRow selected={checkList.indexOf(row.id) !== -1}
                                      onClick={(e) => props.enableCheck && onChange(row.id)}>
                                {
                                    props.enableCheck &&
                                    <StyledTableCell
                                        width={40}
                                        enableBorder={enableBorder}
                                        align={props.align}
                                    >
                                        <Checkbox
                                            size={'small'}
                                            checked={checkList.indexOf(row.id) !== -1}
                                            onChange={(e) => onChange(row.id)}/>
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
        </TableContainer>
    </Box>
}

export type {
    DTableColumn,
    DTableProps
}