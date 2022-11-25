import { IStrategy } from "./i-strategy";
const { faker } = require('@faker-js/faker');

export class OnlineStrategy implements IStrategy{
    shortString: string;
    longString: string;

    constructor(){
        this.shortString = faker.datatype.string();
        this.longString = faker.datatype.string(100);
    }

    getShortString():string {
        return this.shortString;
    }

    getLargeString():string {
        return this.longString;
    }
    getUserName: () => "getUserName";
    getUserPassword: () => "getUserPassword";
    getEmail: () => "getEmail";
    getNumber: () => 1
    getTagName: () => "getTagName";
    getNaughtyString: () => "getNaughtyString";
    
}