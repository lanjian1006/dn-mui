import { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material/styles";
interface DFlexBoxProps {
    children?: ReactNode;
    justifyContent?: string;
    alignItems?: string;
    sx?: SxProps<Theme>;
}
export default function DFlexBox(props: DFlexBoxProps): JSX.Element;
export {};
