import { Request, Response } from "express";
import log from "../utils/logger";
import { CreateUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";
import { omit } from "lodash";

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>, 
    res: Response
) {
    try{
        const user = await CreateUser(req.body);
        return res.send(omit(user.toJSON(), "password"));
    } catch(error: any) {
        log.error(error);
        return res.status(409).send(error.message);
    }
} 