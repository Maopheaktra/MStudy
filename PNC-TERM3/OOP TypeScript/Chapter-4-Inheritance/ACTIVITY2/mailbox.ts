class Mailbox {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}

abstract class Mail {
    private title: string;
    private body: string;
    constructor(title: string, body: string) {
        this.title = title;
        this.body = body;
    }
}

class RecievedEmail extends Mail{
    private recievedDate:string;
    user:User;
    constructor(title: string, body: string, recievedDate: string) {
        super(title, body);
        this.recievedDate = recievedDate;
        this.user;
    }
    fromUser(userName: User):void {
        this.user = userName;
    }
}

class SentEmail extends Mail{
    private sentDate:string;
    user:User[] = [];
    constructor(title: string, body: string, sentDate: string) {
        super(title, body);
        this.sentDate = sentDate;
        this.user = [];
    }
    toUser(userName: User):void {
        this.user.push(userName);
    }
}

class User {
    private FirstName: string;
    private LastName: string;
    constructor(FirstName: string, LastName: string) {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
}

