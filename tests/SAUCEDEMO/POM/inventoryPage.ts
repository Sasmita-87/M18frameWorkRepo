import { Page, Locator } from '@playwright/test';

export default class InventoryPage {
    page: Page;
    productsTitle: Locator;
    btnAddToCart:Locator;
    cart: Locator;

    constructor(page: Page) {
        this.page = page;
       this.productsTitle = page.locator('.title');
        this.btnAddToCart=page.getByText("Add to cart",{exact:true})
        this.cart = page.locator('.shopping_cart_container');
        
    }
//     async addProduct(productName: string) {
//     let product = this.page.getByText(productName);
//     await product.getByText("Add to cart",{exact:true}).click();

// }
}
