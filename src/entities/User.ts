export interface IUser {
    userId: number;
    userName: string;
    email: string;
}

class User implements IUser {

    public userId: number;
    public userName: string;
    public email: string;

    constructor(nameOrUser: string | IUser, email?: string, userId?: number) {
        if (typeof nameOrUser === 'string') {
            this.userName = nameOrUser;
            this.email = email || '';
            this.userId = userId || -1;
        } else {
            this.userName = nameOrUser.userName;
            this.email = nameOrUser.email;
            this.userId = nameOrUser.userId;
        }
    }
}

export default User;
