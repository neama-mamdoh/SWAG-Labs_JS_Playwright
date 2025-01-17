const { expect } = require('@playwright/test');

exports.InfoPage = class InfoPage{
    
    constructor(page){
        this.page=page;
        this.firstName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");
        this.ZipCode = page.locator("#postal-code");
        this.continueBtn = page.locator("#continue");
        this.OverviewPageTitle = page.locator(".title");
    } 

    async FillInfoAndContinue(Fname,Lname,ZIPCode){
        await this.firstName.fill(Fname);
        await this.lastName.fill(Lname);
        await this.ZipCode.fill(ZIPCode);
        await this.continueBtn.click();
    }


    async validateGoingToOverviewPage(title){
        await this.OverviewPageTitle.waitFor();
        expect (await this.OverviewPageTitle).toContainText(title);
    }


}