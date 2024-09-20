
class User {

    // all the fields the user would have
    public userID: string = '';
    public fullName: string = '';
    public displayName: string = '';
    public parentID: string = '';
    public minor: boolean = false;
    public dateCreated: Date = new Date();
    public archive: boolean = false;
    public contactID: string = '';
    public dateArchived: Date = new Date();
}

export default User;