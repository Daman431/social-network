import { FC } from "react";
import { HeaderProps } from "./HeaderProps";

const Header: FC<HeaderProps> = ({ className }) => {
    return <div className="bg-primary-100 text-white h-1/6 p-4 ">
        Header
    </div>
}

export default Header;