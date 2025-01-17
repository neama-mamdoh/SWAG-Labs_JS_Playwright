// @ts-check
const { test, expect } = require('@playwright/test');
const { POManager } = require ('../Pages/POManager');

test('LoginWithStandardUser', async ({ page }) => {
  const poManager = new POManager(page);
  const test_UserName = "standard_user";
  const test_Password = 'secret_sauce';
  const productToAddToCart = "Sauce Labs Bolt T-Shirt";
  const TXT_ToSearch = "Products";
  const infoPGTitle = "Your Information";
  const Fname = "Neama";
  const Lname = "Mamdoh";
  const Zipcode = "380009";
  const OverviewPGTitle = "Overview";
  const ThanksLine = "Thank you for your order!";


  const loginnPG = poManager.getLoginPage();
  await loginnPG.goto();
  await loginnPG.loginWithStandardUSer(test_UserName,test_Password);
  //assertion that homePage landing 
  await loginnPG.validateLogin(TXT_ToSearch);
  
  const homePG = poManager.getHomePage();
  await homePG.addSauceLabsBoltTShirtToCart(productToAddToCart);
  await homePG.navigateToCart();
  await homePG.validateOrderAdditionToCart(productToAddToCart);

  const cartPG = poManager.getCartPage();
  await cartPG.clickCheckout();
  await cartPG.validateGoingToInfoPage(infoPGTitle);

  const infoPG = poManager.getInfoPage();
  await infoPG.FillInfoAndContinue(Fname,Lname,Zipcode);
  await infoPG.validateGoingToOverviewPage(OverviewPGTitle);


  const overviewPG = poManager.getOverviewPage();
  await overviewPG.clickFinish();
  await overviewPG.validateThankouPage(ThanksLine);


  await page.pause();
  
});
