import { Page, Locator } from '@playwright/test';

export default class LoginPage {
     page: Page;
    
     username: Locator;
     password: Locator;
     loginButton: Locator;
     //errorMessage: Locator;
     //productsTitle: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
       // this.errorMessage = page.locator('[data-test="error"]');
        //this.productsTitle = page.locator('.title');
    }

    async launchUrl() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username: string) {
        await this.username.fill(username);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    // async getErrorMessage() {
    //     return await this.errorMessage.innerText();
    // }

    // async getProductsTitle() {
    //     return await this.productsTitle.innerText();
    // }
}