import express from "express";
import { editUser, findUser, getAllUsers, register } from "../controllers/user.controller";
import { IUser } from "../models/IUser";

const router = express.Router();


router.get("/all", getAllUsers);
router.get("/:id", findUser);
router.put("/", editUser);
router.post<any, any, IUser>("/", register);


export default router;