import { IStrategy } from "./i-strategy";

export class OnlineStrategy implements IStrategy{

    getShortString():string { 
        return "getShortString";
    }
    getLargeString: () => "getLargeString";
    getUserName: () => "getUserName";
    getUserPassword: () => "getUserPassword";
    getEmail: () => "getEmail";
    getNumber: () => 1
    getTagName: () => "getTagName";
    getNaughtyString: () => "getNaughtyString";
    
}