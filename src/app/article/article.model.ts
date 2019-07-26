import { ArticleObject } from './article.objet';

export class Article{
    id:number;
    name:string;
    description:string;
    vote:number;
    url:string;
    constructor(article:ArticleObject){
    this.id=article.id;
    this.name=article.name;
    this.description=article.description||"";
    this.vote=article.vote||0;
    this.url=article.url||"https://place-hold.it/200*300";
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