import {Checkbox, IconButton} from "@mui/material";
import DTableCell from "./DTableCell";
import DTableRow from "./DTableRow";
import DeleteIcon from '@mui/icons-material/Delete';

interface DTableToolBarProps{
    columnCount: number
}

export default function DTableToolBar(props: DTableToolBarProps) {
    return <DTableRow>
        <DTableCell rawProps={{width: '38px'}}>
            <Checkbox size="small"/>
        </DTableCell>
        <DTableCell rawProps={{colSpan: props.columnCount}}>
            <IconButton>
                <DeleteIcon fontSize={'small'} />
            </IconButton>
        </DTableCell>
    </DTableRow>
}