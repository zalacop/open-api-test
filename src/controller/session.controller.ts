import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";
import { omit } from "lodash";

export async function createUserSessionHandler(req: Request, res: Response) {
   
    // Validate the user's email and password
    const user = await validatePassword(req.body);

    if (!user) {
        return res.status(401).send("Invalid email or password");
    }

    // create a session
    // omit the password field
    const userWithoutPassword = omit(user.toJSON(), 'password');

    // now you can safely access _id
    const session = await createSession(userWithoutPassword._id, req.get("user-agent") || "");

     // create an access token

     // create a refresh token

    // return access & refresh tokens
}
