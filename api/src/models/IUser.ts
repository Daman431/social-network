import { Types } from 'mongoose';

export interface IUser {
    _id?: string;
    firstName: string;
    lastName?: string;
    pass: string;
    email: string;
    userName: string;
    gender?: Gender
    mobile?: string;
    status?: ProfileStatus;
    followers: Types.Array<String>;
}

enum ProfileStatus {
    PUBLIC = "public",
    PRIVATE = "private"
}

enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}