import { test, expect } from '@playwright/test';
import LoginPage from './SAUCEDEMO/POM/sauceLoginpage.ts'
import InventoryPage from './SAUCEDEMO/POM/inventoryPage.js';
import data from "./SAUCEDEMO/DDT/SauceLogindata.json"
//import Utility from "../SAUCEDEMO/Utility/SaucetestUtility.ts"
import { getRandomNumber } from './SAUCEDEMO/Utility/SaucetestUtility';
import { url } from 'node:inspector';

test("SauceDemo Login", async ({ page }) => {
    

    let loginPage = new LoginPage(page);

    for (let testdata of data.valid) {
        let url=testdata.url
        let Username= testdata.userName
        let Password = testdata.passWord

        await page.goto(url)
        await loginPage.username.fill(Username)
    await loginPage.password.fill(Password)
   await loginPage.loginButton.click()

}
let productlist=new InventoryPage(page);
 for (let testdata of data.valid) {
        let itemname=testdata.productName

       // await productlist.addProduct().click()


    
}
})