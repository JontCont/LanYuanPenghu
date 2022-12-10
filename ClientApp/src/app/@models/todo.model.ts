export interface Todo{
    Status: Boolean;
    Thing : String;
}

export class TodoClass{
    Status: Boolean;
    Thing : String;

    constructor(_thing: string , _status : boolean =false){
        this.Thing = _thing;
        this.Status = _status;
    }

    toggle(){
        this.Status = !this.Status;
    }
}

