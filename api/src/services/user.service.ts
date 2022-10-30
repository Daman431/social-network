import { userModel } from "../db/schemas/user.schema"
import { IUser } from "../models/IUser"


export const getUserList = async (): Promise<IUser[] | null> => {
    const user = await userModel.find({});
    return user;
}

export const findUserById = async (id: string): Promise<IUser | null> => {
    const user = await userModel.findById(id);
    return user;
}

export const editUser = (editedUser: IUser) => {

}

export const followUser = (id:string) => {
    
}

export const registerUser = async (userDto: IUser): Promise<IUser | null> => {
    const user = new userModel<IUser>(userDto);
    await user.save();
    return user;
}