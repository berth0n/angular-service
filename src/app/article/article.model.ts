export class Article{
    id:number;
    name:string;
    description:string;
    vote:number;
    constructor(id:number, name:string, desciption?:string, vote?:number){
    this.id=id;
    this.name=name;
    this.description=desciption||"";
    this.vote=vote||0;
    }
    voteUp():void{
        this.vote++;
    }
    voteDown():void{
        this.vote--;
    }
    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name=name;
    }
}