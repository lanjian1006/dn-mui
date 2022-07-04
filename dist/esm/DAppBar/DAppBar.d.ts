/// <reference types="react" />
import { SxProps, Theme } from "@mui/material/styles";
interface DAppBarProps {
    children?: JSX.Element | JSX.Element[] | string;
    sx?: SxProps<Theme>;
}
export default function DAppBar(props: DAppBarProps): JSX.Element;
export {};
