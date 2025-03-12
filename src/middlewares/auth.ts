import { NextFunction, Request, Response } from "express";
import  jwt  from "jsonwebtoken";

export const verifyToken = async ( req: Request, res: Response, next: NextFunction) =>{
    const jwtsecret = process.env.JWT_SECRET as string
    const token = req.headers.authorization as string


try {
    const verify = jwt.verify(token, jwtsecret)
    next();
} catch (error: any) {
    console.log("error", error);
    res.status(401).send(error.message)
}

};