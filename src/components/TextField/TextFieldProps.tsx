import { ChangeEventHandler } from "react"

export type TextFieldType = "text" | "password";

interface TextFieldProps {
    name?: string
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    type?: TextFieldType
    className?: string
    value: string | number
}

export default TextFieldProps;