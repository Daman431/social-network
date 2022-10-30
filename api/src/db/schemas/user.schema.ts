import { Schema, model } from 'mongoose';
import { IUser } from '../../models/IUser';

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    gender: String,
    mobile: String,
    pass: { type: String, required: true },
    status: String,
    userName: { type: String, required: true },
    followers: Array<String>
});

export const userModel = model<IUser>('User', userSchema); 