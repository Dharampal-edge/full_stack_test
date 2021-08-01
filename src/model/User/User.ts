import { IUser } from '@entities/User';

export interface IUserDao {
    getAll: () => Promise<IUser[]>;
    add: (user: IUser) => Promise<void>
}

class UserDao implements IUserDao {

    /**
     *
     */
    public getAll(): Promise<IUser[]> {
         // TODO
        return Promise.resolve([]);
    }

    /**
     *
     * @param user
     */
    public async add(user: IUser): Promise<void> {
         // TODO
        return Promise.resolve(undefined);
    }

}

export default UserDao;
