import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { verifyJwt } from "../utils/jwt.utils";

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
        const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

        if(!accessToken) {
            return next();
        }

        const {decoded, expired} = verifyJwt(accessToken);

        if(decoded) {
            res.locals.user = decoded;
            return next();
        }
}

export default deserializeUser;