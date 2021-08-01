import { Request, Response, NextFunction } from 'express';
/**
 * Middleware
 * 
 * @param req 
 * @param res 
 * @param next
 * @returns 
 */
export default async function authenticateUser(req: Request, res: Response, next: NextFunction) {
    if (req.headers.email === "test@gmail.com") {
        next();
    } else {
        return res.status(401).json({ message: "Unauthorised access!!" });
    }
}