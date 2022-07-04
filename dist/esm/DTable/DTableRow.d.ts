import { ReactNode } from "react";
import { TableCellProps } from "@mui/material/TableCell";
declare type Column = {
    field: string;
    fieldName: string;
    width?: number | string;
    fixed?: 'right' | 'left';
    cusDefine?: {
        filedName?: (row?: any) => string | number | boolean | ReactNode;
    };
};
declare class TableRowData {
    [key: string]: any;
}
interface DTableRowProps {
    children?: ReactNode;
    columns?: Column[];
    rowData?: TableRowData;
    rowIndex?: number;
    type: 'head' | 'body';
    cellProps?: TableCellProps;
    hover?: boolean;
    onClick?: (id: any) => void;
    onHeadCheck?: (id: any) => void;
    border?: boolean;
    cellAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
    cellPadding?: 'checkbox' | 'none' | 'normal';
    indeterminate?: boolean;
    check?: boolean;
}
export default function DTableRow(props: DTableRowProps): JSX.Element;
export type { Column, TableRowData, DTableRowProps };
