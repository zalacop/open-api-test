import { FilterQuery, InferSchemaType } from "mongoose";
import UserModel, { UserDocument } from "../models/user.models";
import { omit } from "lodash";


export async function CreateUser(
    input: InferSchemaType<Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">>
) {
    try{
        const user = await UserModel.create(input);

        return omit(user.toJSON(), 'password');
    } catch(error: any) {
        throw new Error(error);
    }
}


export async function validatePassword({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const user = await UserModel.findOne({ email });
  
    if (!user) {
      return false;
    }
  
    const isValid = await user.comparePassword(password);
  
    if (!isValid) return false;
  
    return omit(user, "password");
  }

  export async function findUser(query: FilterQuery<UserDocument>) {
    return UserModel.findOne(query).lean();
  }