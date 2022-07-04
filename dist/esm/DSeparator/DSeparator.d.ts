import { ReactNode } from "react";
interface SeparatorProps {
    children?: Array<ReactNode>;
    gutter?: number;
    position?: 'left' | 'center' | 'right';
    sx?: Object;
}
export default function DSeparator(props: SeparatorProps): JSX.Element;
export {};
