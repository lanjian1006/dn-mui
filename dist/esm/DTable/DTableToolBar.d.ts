/// <reference types="react" />
import { DTableRowProps } from "./DTableRow";
interface DTableToolBarProps extends DTableRowProps {
    columnCount: number;
}
export default function DTableToolBar(props: DTableToolBarProps): JSX.Element;
export {};
