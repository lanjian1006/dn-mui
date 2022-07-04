import { ReactNode } from "react";
interface HeadCardProps {
    width?: string;
    height?: string;
    headHeight?: string;
    head?: ReactNode;
    children?: ReactNode;
}
export default function HeadCard(props: HeadCardProps): JSX.Element;
export {};
