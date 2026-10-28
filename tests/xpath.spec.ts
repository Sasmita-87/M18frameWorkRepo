import{test} from '@playwright/test'
test("xpath",async({page})=>{
    //await page.goto("https://practicetestautomation.com/practice-test-login/ ")
    //relative path
    //1.//tagname with indexing
    // await page.locator("(//input)[1]").fill("student")
    //2.//tagname[@attr="value"]
    //await page.locator('//input[@id="username"]').fill("student")
    // await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020")
    // await page.locator('//span[@class="v1zwn28" and text()="Cart"]')
    await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020/medals")
    // await page.locator('//p[@data-cy="ocs-text-module"]/ancestor::div[@class="sc-jSFipO iqzhid"]').click()
    await page.locator('//a[@href="/en/olympic-games/tokyo-2020/athletes"]').click()
    let text = await page.locator('/div[@title="Gold"]//span[text()="4"]').textContent()
    console.log(text);
    
    

})