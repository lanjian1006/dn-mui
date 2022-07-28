import { Checkbox, TableRow, Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
class TableRowData {
}
export default function DTableRow(props) {
    var _a, _b;
    const cellSX = {
        borderRight: props.border ? 'solid 1px #ddd' : 'none',
        '&:last-child': {
            borderRight: 'none'
        }
    };
    const onRowClick = () => {
        var _a, _b;
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, (_b = props.rowData) === null || _b === void 0 ? void 0 : _b['id']);
    };
    const onHeadCheck = () => {
        var _a, _b;
        (_a = props.onHeadCheck) === null || _a === void 0 ? void 0 : _a.call(props, (_b = props.rowData) === null || _b === void 0 ? void 0 : _b['id']);
    };
    return React.createElement(TableRow, { selected: props.type === 'head' ? false : props.check, hover: props.hover, onClick: onRowClick, sx: {
            background: props.type === 'head' ? '#ccc' : 'none'
        } },
        React.createElement(TableCell, { width: '38px', padding: 'checkbox', align: 'center', key: 'row-check', sx: Object.assign(Object.assign({}, cellSX), { pr: '4px' }) },
            React.createElement(Checkbox, { size: 'small', checked: props.check, indeterminate: props.indeterminate, onClick: onHeadCheck })), (_a = props.children) !== null && _a !== void 0 ? _a : (_b = props.columns) === null || _b === void 0 ? void 0 : _b.map((column, cindex) => {
        var _a, _b, _c, _d;
        return React.createElement(TableCell, { padding: props.cellPadding, align: props.cellAlign, width: column.width, key: column.field + cindex, sx: cellSX }, props.type === 'head' ?
            React.createElement(Typography, { sx: { height: '29.5px', lineHeight: '29.5px' } }, column.fieldName) :
            (_c = (_b = (_a = column.cusDefine) === null || _a === void 0 ? void 0 : _a.filedName) === null || _b === void 0 ? void 0 : _b.call(_a, props.rowData)) !== null && _c !== void 0 ? _c : (_d = props.rowData) === null || _d === void 0 ? void 0 : _d[column.field]);
    }));
}
//# sourceMappingURL=DTableRow.js.map