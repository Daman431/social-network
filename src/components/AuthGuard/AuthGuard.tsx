"use client";
import { getIsAuthenticated } from "@/store/helpers/authentication.helpers";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const AuthGuard = () => {
    const authenticatedRoutes = ["/home"];
    const isAuthenticated = useSelector(getIsAuthenticated);
    const router = useRouter();
    const pathName = usePathname();
    useEffect(() => {
        console.log(pathName)
        if (!isAuthenticated && authenticatedRoutes.includes(pathName)) {
            router.push("/login")
        }
    }, []);
    return null
}

export default AuthGuard;