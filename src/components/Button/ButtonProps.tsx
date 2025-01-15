import { MouseEventHandler, ReactNode } from "react";

export type ButtonType = "Primary" | "Secondary" | "Tertiary"

export interface IButtonProps {
    children: ReactNode | ReactNode[]
    type: ButtonType
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}