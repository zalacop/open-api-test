import mongoose from "mongoose";
import { UserDocument } from "./user.models";

export interface SchemaDocument extends mongoose.Document {
    user: UserDocument['_id'];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}

const sessionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        valid: { type: Boolean, default: true },
        userAgent: { type: String }
    }, 
    {
        timestamps: true
    }
);

const SessionModel = mongoose.model<SchemaDocument>("Session", sessionSchema);

export default SessionModel;