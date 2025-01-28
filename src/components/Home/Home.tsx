"use client";
import { FC, useEffect } from "react";
import { HomeProps } from "./HomeProps";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "@/store/helpers/authentication.helpers";

const Home: FC<HomeProps> = () => {
    const isAuthenticated = useSelector(getIsAuthenticated);
    useEffect(() => {
        console.log(isAuthenticated);        
    },[isAuthenticated]);
    return <div>
        <h1>
            Welcome to Home!            
        </h1>
    </div>
}

export default Home;