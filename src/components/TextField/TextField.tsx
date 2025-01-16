import { FC, useState } from "react";
import TextFieldProps, { TextFieldType } from "./TextFieldProps";
import Button from "../Button/Button";

const TextField: FC<TextFieldProps> = ({ name, onChange, type = "text", className, value }) => {
    const defaultClass = "border-0 outline-none h-full w-full p-2";
    const conatinerClass = "";
    const [inputType, setType] = useState<TextFieldType>(type);
    const switchType = () => {
        switch (inputType) {
            case "text": setType("password")
                break;
            case "password": setType("text")
                break;
        }
    }
    return <div className="flex border relative">
        <input
            type={inputType}
            onChange={onChange}
            name={name}
            className={`${className} ${defaultClass}`}
            value={value}
        />
        {
            type == "password" &&
            <Button onClick={switchType} type="Primary" className="border-none bg-transparent">
                {inputType == "password" ? "Show" : "Hide"}
            </Button>
        }
    </div>
}

export default TextField;