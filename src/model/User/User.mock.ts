import { IUser } from '@entities/User';
import { getRandomInt } from '@shared/functions';
import { IUserDao } from './User';
import MockDaoMock from '../db/db.mock';

class User extends MockDaoMock implements IUserDao {

    public async getAll(): Promise<IUser[]> {
        const db = await super.openDb();
        return db.users;
    }

    public async add(user: IUser): Promise<void> {
        const db = await super.openDb();
        user.userId = getRandomInt();
        db.users.push(user);
        await super.saveDb(db);
    }
}

export default User;
