import { Router } from 'express';
import { getAllUser, addUser } from './Users';

import authenticateUser from "../middleware/middleware";

// User-route
const userRouter = Router();
userRouter.get('/getAllUser', authenticateUser, getAllUser);
userRouter.post('/addUser', addUser);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/user', userRouter);
export default baseRouter;
