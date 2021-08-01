import StatusCodes from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import UserDo from 'src/model/User/User.mock';
const userDo = new UserDo();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;
/**
 * Get all users.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllUsers(req: Request, res: Response) {
    const users = await userDo.getAll();
    return res.status(OK).json({ users });
}


/**
 * Add one user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneUser(req: Request, res: Response) {
    const { user } = req.body;
    if (!user) {
        return res.status(BAD_REQUEST).json({
            error: "One or more of the required parameters was missing.",
        });
    }
    await userDo.add(user);
    return res.status(CREATED).json({
        message: "Data Added in Json File"
    });
}


