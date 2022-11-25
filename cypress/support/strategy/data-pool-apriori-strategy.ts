import { IStrategy } from "./i-strategy";

const successData = require('./datapoolapriori.json');

export class DataPoolAprioriStrategy implements IStrategy{
    
    testData!:[]

    constructor(){
        let index = this.randomIntFromInterval(successData.length);
        this.testData = successData[index];
    }

    getShortString():string { 
        return this.testData["getShortString"];
    }

    getLargeString():string { 
        return this.testData["getLargeString"];
    }

    getUserName():string { 
        return this.testData["getUserName"];
    }

    getUserPassword():string { 
        return this.testData["getUserPassword"];
    }

    getEmail():string { 
        return this.testData["getEmail"];
    }

    getNumber():number { 
        return this.testData["getNumber"];
    }
    
    getTagName():string { 
        return this.testData["getTagName"];
    }

    getNaughtyString():string { 
        return this.testData["getNaughtyString"];
    }
    

    randomIntFromInterval(max:number) {
        return Math.floor(Math.random() * (max + 1))
    }
    
}