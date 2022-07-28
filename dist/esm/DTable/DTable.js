import { Table, TableBody, TableHead } from "@mui/material";
import DTableRow from "./DTableRow";
import { useState } from "react";
import { _indexOf } from "../Utilities/ArrayAssistant";
import DTableToolBar from "./DTableToolBar";
export default function DTable(props) {
    var _a, _b, _c, _d;
    const [selectList, setSelectList] = useState([]);
    const [checkAll, setCheckAll] = useState(false);
    const rowMap = new Map(new Map());
    const rows = (_a = props.dataSource) === null || _a === void 0 ? void 0 : _a.slice(0, (_b = props.maxRows) !== null && _b !== void 0 ? _b : (_c = props.dataSource) === null || _c === void 0 ? void 0 : _c.length);
    const rowIdList = [];
    const rowsCount = (_d = rows === null || rows === void 0 ? void 0 : rows.length) !== null && _d !== void 0 ? _d : 0;
    const onRowClick = (id) => {
        const _index = _indexOf(selectList, id, 0);
        let newSelectList = [];
        if (_index === -1) {
            selectList.splice(-1, -1, id);
        }
        else {
            selectList.splice(_index, 1);
        }
        newSelectList = newSelectList.concat(selectList);
        setCheckAll(newSelectList.length === rowsCount);
        setSelectList(newSelectList);
    };
    const onHeadCheck = (id) => {
        if (id === undefined) {
            let newCheckAll = !checkAll;
            let newSelectList = [];
            if (!newCheckAll) {
                setSelectList([]);
            }
            else {
                newSelectList = newSelectList.concat(rowIdList);
                setSelectList(newSelectList);
            }
            setCheckAll(newCheckAll);
        }
    };
    return React.createElement(Table, { size: props.size, stickyHeader: props.stickyHeader },
        React.createElement(TableHead, null, selectList.length > 0 ? React.createElement(DTableToolBar, { type: 'head', columnCount: props.columns.length, cellPadding: props.cellPadding, cellAlign: props.cellAlign, onHeadCheck: onHeadCheck, check: checkAll, indeterminate: selectList.length < rowsCount && selectList.length > 0 }) : React.createElement(DTableRow, { type: 'head', columns: props.columns, border: props.border, cellPadding: props.cellPadding, cellAlign: props.cellAlign, check: checkAll, indeterminate: selectList.length < rowsCount && selectList.length > 0, onHeadCheck: onHeadCheck })),
        React.createElement(TableBody, null, rows === null || rows === void 0 ? void 0 : rows.map((row, rowIndex) => {
            const rowId = row['id'];
            rowIdList.push(rowId);
            rowMap.set(rowId, rowIndex);
            return React.createElement(DTableRow, { key: rowIndex, type: 'body', columns: props.columns, rowData: row, hover: props.hover, border: props.border, cellPadding: props.cellPadding, cellAlign: props.cellAlign, rowIndex: rowIndex, onClick: onRowClick, check: checkAll || _indexOf(selectList, rowId, 0) !== -1 });
        })));
}
//# sourceMappingURL=DTable.js.map