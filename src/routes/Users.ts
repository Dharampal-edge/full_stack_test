import StatusCodes from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import UserDo from 'src/model/User/User.mock';
const userDo = new UserDo();
/**
 * Get all users.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllUser(req: Request, res: Response) {
    const users = await userDo.getAll();
    return res.status(200).json({ users });
}


/**
 * Add one user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addUser(req: Request, res: Response) {
    const { user } = req.body;
    if (!user) {
        return res.status(400).json({
            error: "One or more of the required parameters was missing.",
        });
    }
    await userDo.add(user);
    return res.status(201).json({
        message: "Data Added in Json File"
    });
}


