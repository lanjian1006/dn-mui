import { IconButton } from "@mui/material";
import DTableRow from "./DTableRow";
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell from "@mui/material/TableCell";
export default function DTableToolBar(props) {
    return React.createElement(DTableRow, { type: 'head', onHeadCheck: props.onHeadCheck, check: props.check, cellPadding: props.cellPadding, cellAlign: props.cellAlign, indeterminate: props.indeterminate },
        React.createElement(TableCell, { colSpan: props.columnCount, sx: { textAlign: 'right' }, padding: props.cellPadding },
            React.createElement(IconButton, { size: 'small' },
                React.createElement(DeleteIcon, { fontSize: 'small' }))));
}
//# sourceMappingURL=DTableToolBar.js.map