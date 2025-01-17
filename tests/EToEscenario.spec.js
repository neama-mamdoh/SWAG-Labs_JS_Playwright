// @ts-check
const { test, expect } = require('@playwright/test');
const { POManager } = require ('../Pages/POManager');

test('LoginWithStandardUser', async ({ page }) => {
  const poManager = new POManager(page);
  const test_UserName = "standard_user";
  const test_Password = 'secret_sauce';
  const productToAddToCart = "Sauce Labs Bolt T-Shirt";
  const TXT_ToSearch = "Products";
  const loginnPG = poManager.getLoginPage();
  await loginnPG.goto();
  await loginnPG.loginWithStandardUSer(test_UserName,test_Password);
  //assertion that homePage landing 
  await loginnPG.validateLogin(TXT_ToSearch);
  
  const homePG = poManager.getHomePage();
  await homePG.addSauceLabsBoltTShirtToCart(productToAddToCart);
  await homePG.navigateToCart();
  await homePG.validateOrderAdditionToCart(productToAddToCart);
  await page.pause();
  
});
