const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage{
    /*page: any;
    userName: any;
    password: any;
    loginBtn: any;*/
    /*readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;*/


    constructor(page){
        this.page=page;
        this.userName = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginBtn = page.locator("#login-button");
        this.homepageTitle = page.locator(".title");
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async loginWithStandardUSer(user,pass){
        await this.userName.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

    async validateLogin(searchTXT){
        await this.homepageTitle.waitFor();
        expect (await this.homepageTitle).toHaveText(searchTXT);
    }


}