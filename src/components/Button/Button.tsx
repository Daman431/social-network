import { FC } from "react";
import { IButtonProps } from "./ButtonProps";


const Button: FC<IButtonProps> = ({ children, className, type, onClick }) => {
    let defaultClasses: string | undefined = "border px-2 rounded-md";
    switch (type) {
        case "Primary": defaultClasses += "";
            break;
        case "Secondary": defaultClasses += "";
            break;
        case "Tertiary": defaultClasses += "";
            break;
    }
    return <>
        <button className={`${defaultClasses} ${className} `} onClick={onClick}>
            {children}
        </button>
    </>
}

export default Button;