import { FC } from "react";
import { HeaderProps } from "./HeaderProps";

const Header: FC<HeaderProps> = ({ className }) => {
    return <div className="bg-green-100 h-1/5">
        Header
    </div>
}

export default Header;