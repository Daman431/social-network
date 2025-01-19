import { FC } from "react";
import { LayoutProps } from "./LayoutProps";

const Layout: FC<LayoutProps> = ({ children, className }) => {
    return <div className={`h-screen w-screen grid grid-cols-1 bg-slate-100 ${className}`}>
        {/* Header Start*/}
        {/* Header End */}
        {children}
    </div>
}

export default Layout;