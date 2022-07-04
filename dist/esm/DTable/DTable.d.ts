/// <reference types="react" />
import { Column, TableRowData } from "./DTableRow";
interface DTableProps {
    columns: Column[];
    dataSource?: TableRowData[];
    cellAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
    cellPadding?: 'none' | 'normal';
    size?: 'small' | 'medium';
    hover?: boolean;
    stickyHeader?: boolean;
    maxRows?: number | undefined;
    border?: boolean;
}
export default function DTable(props: DTableProps): JSX.Element;
export {};
