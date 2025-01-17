const { expect } = require('@playwright/test');

exports.HomePage = class HomePage{
    
    constructor(page){
        this.page=page;
        this.allProducts = page.locator(".inventory_item_description");
        this.cart = page.locator(".shopping_cart_link");
        //this.productPrice;
        this.productPriceinCart = page.locator(".inventory_item_price");
        this.productNameincart = this.page.locator(".inventory_item_name");
    } 
    productPrice;
    async addSauceLabsBoltTShirtToCart(productName){
        const count = await this.allProducts.count();
        for(let i =0; i < count; ++i){
            if(await this.allProducts.nth(i).locator(".inventory_item_name").textContent() === productName){
                await this.allProducts.nth(i).locator("text=Add to cart").click();
                this.productPrice = await this.allProducts.nth(i).locator(".inventory_item_price").innerText();
                //console.log(this.productPrice);
                break;
            }
        }
    }


    async navigateToCart(){
        await this.cart.click();
    }

    async validateOrderAdditionToCart(productName){
        await this.productNameincart.waitFor();
        expect (await this.productNameincart).toHaveText(productName);
        await this.productPriceinCart.waitFor();
        expect(await this.productPriceinCart.innerText()).toContain(this.productPrice);
    }


}