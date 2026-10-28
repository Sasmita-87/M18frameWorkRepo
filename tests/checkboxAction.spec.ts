import{test} from'@playwright/test'
test("Check and Uncheck ",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
     await page.locator('#domain_a').check()
     await page.locator('#domain_b').check()
     await page.locator('#domain_a').uncheck()
})