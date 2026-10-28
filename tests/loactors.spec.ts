import{test} from '@playwright/test'
test("cssSelectors",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    //attribute name
    // await page.locator("input[id='user-name']").fill("sasmita")
    //id attribute
    await page.locator("#user-name").fill("sasmita")
    //class attribute
     await page.locator(".submit-button").click()


})