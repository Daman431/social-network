import { Request, Response } from "express";
import { userDto, userListDto } from "../dtos/user.dto";
import { IUser } from "../models/IUser";
import { TypedRequestBody } from "../models/Request";
import { findUserById, getUserList, registerUser } from "../services/user.service";

const mongoose = require("mongoose");

const register = async (req: TypedRequestBody<IUser>, res: Response) => {
    const user = await registerUser(req.body);
    if (user) {
        res.send(userDto(user));
    }
    else {
        res.send("Something went wrong!");
    }
}

const getAllUsers = async (req: Request, res: Response) => {
    const users = await getUserList();
    if (users) {
        res.send(userListDto(users));
    }
    else {
        res.send("Something Went Wrong!");
    }
}

const findUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await findUserById(mongoose.Types.ObjectId(id));
    if (user) {
        res.send(userDto(user));
    }
    else {
        res.send("User Not Found!");
    }
}

const editUser = (req: Request, res: Response) => {
    res.send("Working!")
}


export {
    register,
    getAllUsers,
    findUser,
    editUser
}