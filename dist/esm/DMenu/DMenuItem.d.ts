import { ReactNode } from "react";
import { SxProps, Theme } from '@mui/material/styles';
interface DMenuItemProps {
    prefixIcon?: ReactNode;
    postIcon?: ReactNode;
    primary?: string;
    handleClick?: (id: any) => void;
    selected?: boolean;
    id?: any;
    hoverColor?: string;
    selectColor?: string;
    backgroundColor?: string;
    color?: string;
    sx?: SxProps<Theme>;
}
export default function DMenuItem(props: DMenuItemProps): JSX.Element;
export type { DMenuItemProps };
