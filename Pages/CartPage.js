const { expect } = require('@playwright/test');

exports.CartPage = class CartPage{
    
    constructor(page){
        this.page=page;
        this.checkoutBtn = page.locator("#checkout");
        this.InfoPageTitle = page.locator(".title");
    } 

    async clickCheckout(){
        await this.checkoutBtn.click();
    }


    async validateGoingToInfoPage(title){
        await this.InfoPageTitle.waitFor();
        expect (await this.InfoPageTitle).toContainText(title);
    }


}