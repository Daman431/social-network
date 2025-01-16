import { FC, MouseEventHandler, Ref, useRef, useState } from "react";
import { IButtonProps } from "./ButtonProps";
import styles from './Button.module.css';


const Button: FC<IButtonProps> = ({ children, className, type = "Primary", onClick, backgroundColor }) => {
    let defaultClasses: string | undefined = "border p-2 px-4 rounded-md text-white relative";
    const buttonRef = useRef<HTMLButtonElement>(null);
    const addRippleEffect = (event: any) => {
        try{
            let buttonWidth = 0
            let buttonHeight = 0
            const btn = buttonRef?.current;
            const rippler = document.createElement("span");
            if (btn) {
                buttonWidth = btn.clientWidth;
                buttonHeight = btn.clientHeight
            }
            const diameter = Math.max(buttonWidth, buttonHeight);
            const radius = diameter / 2;
            if (rippler && btn) {
                const left = event.nativeEvent.layerX - radius;
                const top = event.nativeEvent.layerY - radius;
                rippler.style.width = rippler.style.height = `${diameter}px`;
                rippler.style.left = `${left}px`;
                rippler.style.top = `${top}px`;
                rippler.classList.add(styles.ripple);
            }
            const ripple = btn?.getElementsByClassName(styles.ripple)[0];
            if (ripple) {
                ripple.remove();
            }
            btn?.appendChild(rippler);
        }
        catch(e){
            console.log("Something went wrong with ripple effect")
        }
    }
    const onButtonClick = (event:any) => {
        addRippleEffect(event);
        onClick?.(event);
    }
    switch (type) {
        case "Primary": defaultClasses += " bg-primary ";
            break;
        case "Secondary": defaultClasses += " bg-secondary";
            break;
        case "Tertiary": defaultClasses += " bg-tertiary";
            break;
    }
    return <>
        <button
            ref={buttonRef}
            className={`${defaultClasses} ${className}`}
            style={{ backgroundColor: backgroundColor }}
            onClick={onButtonClick}>
            {children}
        </button>
    </>
}

export default Button;