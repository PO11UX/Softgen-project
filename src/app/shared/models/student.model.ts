export class students{
    name: string;
    surname:string;
    mail: string;
    birthday: number;
    id:any;

   

    constructor(name: string, surname: string,mail: string,birthday: number,id: any){
        this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.birthday = birthday;
        this.id=id;    
    }
}