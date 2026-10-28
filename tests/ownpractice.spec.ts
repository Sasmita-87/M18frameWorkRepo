import{test,expect} from '@playwright/test'
test("assertion_practice",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    let title = await page.getByText("Test login").textContent()
    expect(title).toBe("Test login")
    console.log(title);
    //  await page.getByLabel("Username").fill("student")
    //  await expect(page.getByLabel("Username",{exact:true})).toHaveValue("student")
    await page.locator('input#username').fill("student")
    await expect(page.locator('input#username')).toHaveValue("studentexplicit wait")
})