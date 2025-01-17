const {LoginPage} = require('./LoginPage');
const {HomePage} = require('./HomePage');
const { CartPage } = require('./CartPage');
const {InfoPage} = require('./InfoPage');
const {OverviewPage} = require('./OverviewPage');
exports.POManager = class POManager
{
constructor(page)
{
    this.page = page;
    this.loginnPG = new LoginPage(this.page);
    this.homePG = new HomePage(this.page);
    this.cartPG = new CartPage(this.page);
    this.infoPG = new InfoPage(this.page);
    this.OverviewPG = new OverviewPage(this.page);


}

getLoginPage()
{
    return this.loginnPG;
}


getHomePage()
{
    return this.homePG;
}

getCartPage()
{
    return this.cartPG;
}

getInfoPage()
{
    return this.infoPG;
}

getOverviewPage()
{
    return this.OverviewPG;
}
}