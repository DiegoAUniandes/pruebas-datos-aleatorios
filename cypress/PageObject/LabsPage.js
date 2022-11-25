export class LabsPage{

    constructor(){
        this.labButton = '(//a[normalize-space()="Labs"])'
        this.clearButton = '//span[normalize-space()="Delete"]'
        this.deleteConfirm = '(//span[contains(text(),"Delete")])[2]'
    }

    clearAdmin(){
        cy.xpath(this.labButton).click()
        cy.xpath(this.clearButton).click()
        cy.xpath(this.deleteConfirm).click()
    }
}

export default new LabsPage();
