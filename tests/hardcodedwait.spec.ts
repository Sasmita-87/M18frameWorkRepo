import{test} from '@playwright/test'
test("hardcoded_wait",async({page})=>{
    await page.waitForTimeout(2000)
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.waitForTimeout(2000)
    await page.locator('input#username').fill("student")
    await page.waitForTimeout(2000)
    await page.getByLabel("Password",{exact:true}).fill("passward123")
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:"Submit",exact:true}).click()
})