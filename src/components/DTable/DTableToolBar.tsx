import { Checkbox } from "@mui/material";
import DTableCell from "./DTableCell";
import DTableRow from "./DTableRow";

interface DTableToolBarProps{

}

export default function DTableToolBar(props: DTableToolBarProps) {
    return <DTableRow>
        <DTableCell>
            <Checkbox size="small"/>
        </DTableCell>
        
    </DTableRow>
}