import { ReactNode } from "react";
import DMenuItem from "./DMenuItem";
import DSubMenu from "./DSubMenu";
import { SxProps, Theme } from "@mui/material/styles";
declare type MenuNode = {
    id: string | number;
    name: string;
    icon?: ReactNode;
    children?: MenuNode[];
};
interface DMenuProps {
    dataSource: MenuNode[];
    onSelect?: (id: any) => void;
    focusMode?: boolean;
    preselect?: string | number;
    hoverColor?: string;
    selectColor?: string;
    color?: string;
    openColor?: string;
    sx?: SxProps<Theme>;
}
export default function DMenu(props: DMenuProps): JSX.Element;
export type { MenuNode };
export { DSubMenu, DMenuItem };
