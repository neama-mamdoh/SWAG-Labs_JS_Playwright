const { expect } = require('@playwright/test');

exports.OverviewPage = class OverviewPage{
    
    constructor(page){
        this.page=page;
        this.finishBtn = page.locator("#finish");
        this.ThankouValidation = page.locator(".complete-header");
    } 

    async clickFinish(){
        await this.finishBtn.click();
    }


    async validateThankouPage(title){
        await this.ThankouValidation.waitFor();
        expect (await this.ThankouValidation).toContainText(title);
    }


}