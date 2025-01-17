'use client'
import Button from "@/components/Button/Button";
import TextField from "@/components/TextField/TextField";
import { loginUrl } from "@/constants/api-urls";
import { POST } from "@/service/web-service";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ILoginForm {
    username: string;
    password: string
}
const LoginPage: NextPage = () => {
    const router = useRouter();
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
        POST<ILoginForm, any>(loginUrl, loginForm).then(res => {
            alert(res.data.isSuccessful ? "Login Successful" : 'Login failed')
            router.push("/home")
        }).catch(e => {
            alert(e.message)
        })
    }
    return <>
        <div className="h-screen w-full flex justify-center items-center" >
            <div className="py-2 px-1 flex flex-col space-y-2 rounded-md">
                <TextField
                    type="text"
                    value={loginForm.username}
                    onChange={(e) => onFormChange("username", e.target.value)}
                />
                <TextField
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => onFormChange("password", e.target.value)}
                />
                <Button type="Primary" onClick={login}>
                    Login
                </Button>
            </div>
        </div>
    </>
}

export default LoginPage;