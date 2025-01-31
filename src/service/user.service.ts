import { InferSchemaType } from "mongoose";
import UserModel, { UserDocument } from "../models/user.models";


export async function CreateUser(input: InferSchemaType<UserDocument>) {
    try{
        return await UserModel.create(input)
    } catch(error: any) {
        throw new Error(error);
    }
}