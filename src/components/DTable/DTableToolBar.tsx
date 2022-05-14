import {IconButton} from "@mui/material";
import DTableRow from "./DTableRow";
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell from "@mui/material/TableCell";

interface DTableToolBarProps{
    columnCount: number
}

export default function DTableToolBar(props: DTableToolBarProps) {
    return <DTableRow type={'head'}>
        <TableCell colSpan={props.columnCount}>
            <IconButton>
                <DeleteIcon fontSize={'small'} />
            </IconButton>
        </TableCell>
    </DTableRow>
}