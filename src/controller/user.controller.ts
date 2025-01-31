import { Request, Response } from "express";
import log from "../utils/logger";
import { CreateUser } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response) {
    try{
        const user = await CreateUser(req.body);
        return user;
    } catch(error) {
        log.error(error);
        return res.status(409).send(error.message);
    }
}