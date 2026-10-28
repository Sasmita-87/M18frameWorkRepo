import{test} from '@playwright/test'
test.use({
    actionTimeout:20000
})
test("auto_wait",async({page})=>{
    await page.setDefaultTimeout(25000)
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('input#username').fill("student")
    await page.getByLabel("Password",{exact:true}).fill("passward123")
    await page.getByRole('button',{name:"Submit",exact:true}).click()
})
test("auto_wait1",async({page})=>{
    //await page.setDefaultTimeout(25000)
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('input#username').fill("student")
    await page.getByLabel("Password",{exact:true}).fill("passward123")
    await page.getByRole('button',{name:"Submit",exact:true}).click()
})
test.only("")