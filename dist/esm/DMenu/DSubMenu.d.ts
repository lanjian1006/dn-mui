import { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material/styles";
interface DSubMenuProps {
    children?: ReactNode;
    prefixIcon?: ReactNode;
    primary?: string;
    handleClick?: (id: any) => void;
    selected?: boolean;
    open?: boolean;
    id?: any;
    hoverColor?: string;
    selectColor?: string;
    color?: string;
    openColor?: string;
    sx?: SxProps<Theme>;
}
export default function DSubMenu(props: DSubMenuProps): JSX.Element;
export {};
