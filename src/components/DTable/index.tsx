import {Table, TableBody, TableHead} from "@mui/material";
import DTableRow, {Column} from "./DTableRow";
import DTableToolBar from "./DTableToolBar";
import TableCell from "@mui/material/TableCell";

type TableRowData = {
    [key: string]: any
}

interface DTableProps {
    columns?: Column[]
    dataSource?: TableRowData[]
}

export default function DTable(props: DTableProps) {

    return <Table>
        <TableHead>
            {/*<DTableToolBar columnCount={3} />*/}
            <DTableRow columns={props.columns}/>
        </TableHead>
        <TableBody>
            {

            }
        </TableBody>
    </Table>
}