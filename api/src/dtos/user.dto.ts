import { IUser } from "../models/IUser"


export function userListDto(userList: IUser[]) {
    return userList.map((user) => {
        return {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            gender: user.gender,
            mobile: user.mobile,
            status: user.status,
            userName: user.userName,
        }
    })
}

export function userDto(user: IUser) {
    return {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender,
        mobile: user.mobile,
        status: user.status,
        userName: user.userName,
    }
}