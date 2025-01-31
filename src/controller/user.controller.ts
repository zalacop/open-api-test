import { Request, Response } from "express";
import log from "../utils/logger";

export function createUserHandler(req: Request, res: Response) {
    try{
        const user = await // call create user service
    } catch(error) {
        log.error(error);
        return res.status(409).send(error.message);
    }
}