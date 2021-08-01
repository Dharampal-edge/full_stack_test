import { Router } from 'express';
import { getAllUsers, addOneUser } from './Users';

import authenticateUser from "../middleware/middleware";

// User-route
const userRouter = Router();
userRouter.get('/getAllUser', authenticateUser, getAllUsers);
userRouter.post('/addUser', addOneUser);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
export default baseRouter;
