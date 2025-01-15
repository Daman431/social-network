'use client'
import Button from "@/components/Button/Button";
import { loginUrl } from "@/constants/api-urls";
import { GET, POST } from "@/service/web-service";
import { NextPage } from "next";
import { useState } from "react";

interface ILoginForm {
    username: string;
    password: string
}
const LoginPage: NextPage = () => {
    const defaultLoginForm: ILoginForm = {
        password: '',
        username: ''
    }
    const [loginForm, setLoginForm] = useState(defaultLoginForm);
    const onFormChange = (name: keyof ILoginForm, value: string) => {
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    }
    const login = () => {
        POST<ILoginForm,any>(loginUrl, loginForm).then(res => {
            console.log(res.data)
        })
    }
    return <>
        <h1>
            Login page
            <input type="text" value={loginForm.username} onChange={(e) => onFormChange("username", e.target.value)} />
            <input type="password" value={loginForm.password} onChange={(e) => onFormChange("password", e.target.value)} />
            <Button type="Primary" onClick={login}>
                Login
            </Button>
        </h1>
    </>
}

export default LoginPage;