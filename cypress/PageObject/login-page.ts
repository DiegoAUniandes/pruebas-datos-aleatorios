import takeScreenShot from "../utils/screenshots";

let config = require('../../config.json')

export class LoginPage{

    public logInUrl:string;
    public usrTag:string;
    public usrText:string;
    public pssTag:string;
    public pssText:string;
    public actionElement:string;
    public actionTag:string;
    public adminUrl:string;
    public screenshotPath:string;

    constructor(){
        this.logInUrl = config.siteHost+config.logIn.logInUrl;
        this.usrTag = config.logIn.userTagIdentifier;
        this.usrText = config.logIn.userName;
        this.pssTag = config.logIn.passTagIdentifier;
        this.pssText = config.logIn.userPass;
        this.actionElement = config.logIn.actionElement;
        this.actionTag = config.logIn.actionElement;
        this.adminUrl = config.siteHost+config.logIn.nextUrlExpected;
        this.screenshotPath = config.logIn.screenshotsPath;
    }

    doLogIn() {
        cy.visit(this.logInUrl);
        cy.get(this.usrTag).type(this.usrText);
        cy.get(this.pssTag).type(this.pssText);
        takeScreenShot();
        cy.get(this.actionTag).click({multiple: true, timeout:2000}).then(() =>{
            cy.url().should('eq',this.adminUrl);
            takeScreenShot();    
        });
    }
}