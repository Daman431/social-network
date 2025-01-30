"use client";

import Button from "@/components/Button/Button";
import TextField from "@/components/TextField/TextField";
import { NextPage } from "next";
import { useState } from "react";

interface ISignupForm {
    firstName: string
    lastName: string
    password: string
    email: string
    username: string
    gender: string
    mobile: string
    status: string
}

const SignupPage: NextPage = () => {
    const initialSignupForm: ISignupForm = {
        email: '',
        firstName: '',
        gender: '',
        lastName: '',
        mobile: '',
        password: '',
        status: '',
        username: ''
    }
    const [signupForm, setSignupForm] = useState<ISignupForm>(initialSignupForm);
    const onFormChange = (name: keyof ISignupForm, value: string) => {
        setSignupForm({
            ...signupForm,
            [name]: value
        });
    }
    const signIn = () => {

    }
    return <div className="h-screen w-full flex justify-center items-center" >
        <div className="py-2 px-1 flex flex-col space-y-2 rounded-md">
            <TextField
                type="text"
                showNameAsPlaceholder
                value={signupForm.username}
                name="username"
                onChange={(e) => onFormChange("username", e.target.value)}
            />
            <TextField
                type="text"
                showNameAsPlaceholder
                value={signupForm.email}
                name="email"
                onChange={(e) => onFormChange("email", e.target.value)}
            />
            <TextField
                type="text"
                showNameAsPlaceholder
                value={signupForm.firstName}
                name="firstName"
                onChange={(e) => onFormChange("firstName", e.target.value)}
            />
            <TextField
                type="text"
                showNameAsPlaceholder
                value={signupForm.lastName}
                name="lastName"
                onChange={(e) => onFormChange("lastName", e.target.value)}
            />
            <TextField
                type="text"
                showNameAsPlaceholder
                value={signupForm.gender}
                name="gender"
                onChange={(e) => onFormChange("gender", e.target.value)}
            />
            <TextField
                type="text"
                showNameAsPlaceholder
                value={signupForm.mobile}
                name="mobile"
                onChange={(e) => onFormChange("mobile", e.target.value)}
            />
            <TextField
                type="text"
                showNameAsPlaceholder
                value={signupForm.status}
                name="status"
                onChange={(e) => onFormChange("status", e.target.value)}
            />
            <TextField
                type="password"
                value={signupForm.password}
                name="password"
                onChange={(e) => onFormChange("password", e.target.value)}
            />
            <Button type="Primary" onClick={signIn}>
                Sign Up
            </Button>
        </div>
    </div>
}

export default SignupPage;