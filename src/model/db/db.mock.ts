import jsonfile from 'jsonfile';
import { IUser } from '@entities/User';


interface IDatabase {
    users: IUser[];
}


class UserMock {

    private readonly dbFilePath = 'src/model/db/db.json';


    protected openDb(): Promise<IDatabase> {
        return jsonfile.readFile(this.dbFilePath) as Promise<IDatabase>;
    }


    protected saveDb(db: IDatabase): Promise<void> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}

export default UserMock;
