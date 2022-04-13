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

interface DTableProps extends TableProps{
    columns: DTableColumn[]
    src: DTableRow[]
    enableBorder?: boolean,
    enableCheck?: boolean
}

const StyledTableCell = styled(TableCell)<TableCellProps & { enableBorder?: boolean }>((props) => ({
    border: props.enableBorder ? `solid 1px ${props.theme.palette.grey["300"]}` : '',
}))

const StyledTableHeader = styled(TableRow)<TableRowProps>(({theme}) => ({
    backgroundColor: theme.palette.grey["200"]
}))

const StyledTableOpsHeader = styled(Box)<BoxProps>(({theme}) => ({
    backgroundColor: theme.palette.primary.light,
    padding: '16px'
}))

export default function DTable(props: DTableProps) {
    const {enableBorder} = props
    return <Box>
        <TableContainer>
            <StyledTableOpsHeader>
                <IconButton>
                    <DeleteOutlineIcon/>
                </IconButton>
            </StyledTableOpsHeader>
            <Table>
                <TableHead>
                    <StyledTableHeader>
                        {
                            props.enableCheck && <StyledTableCell width={40} enableBorder={enableBorder}>
                                <Checkbox size={'small'}/>
                            </StyledTableCell>
                        }
                        {
                            props.columns.map((column) => (
                                <StyledTableCell width={column.width} enableBorder={enableBorder}>
                                    {
                                        column.headerName
                                    }
                                </StyledTableCell>
                            ))
                        }
                    </StyledTableHeader>
                </TableHead>
                <TableBody>
                    {
                        props.src.map((row) => (
                            <TableRow>
                                {
                                    props.enableCheck && <StyledTableCell width={40} enableBorder={enableBorder}>
                                        <Checkbox size={'small'}/>
                                    </StyledTableCell>
                                }
                                {
                                    props.columns.map((column) => (
                                        <StyledTableCell width={column.width} enableBorder={enableBorder}>
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