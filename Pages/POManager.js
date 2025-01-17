const {LoginPage} = require('./LoginPage');
const {HomePage} = require('./HomePage');
/*const {OrdersHistoryPage} = require('./OrdersHistoryPage');
const {OrdersReviewPage} = require('./OrdersReviewPage');
const {CartPage} = require('./CartPage');*/
exports.POManager = class POManager
{
constructor(page)
{
    this.page = page;
    this.loginnPG = new LoginPage(this.page);
    this.homePG = new HomePage(this.page);
    /*this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    this.ordersReviewPage = new OrdersReviewPage(this.page);
    this.cartPage = new CartPage(this.page);*/


}

getLoginPage()
{
    return this.loginnPG;
}


getHomePage()
{
    return this.homePG;
}

/*getCartPage()
{
    return this.cartPage;
}

getOrdersHistoryPage()
{
    return this.ordersHistoryPage;
}

getOrdersReviewPage()
{
    return this.ordersReviewPage;
}*/
}