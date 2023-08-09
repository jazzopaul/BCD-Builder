import { ReactNode } from "react";

export default interface ItemContainerProps {
    level: number;
    isHidden: boolean;
    children: ReactNode[];
}