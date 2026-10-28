import{test,expect} from '@playwright/test'
test("auto_retrying_assertion",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    //........toHaveUrl()
    // await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1")
    // //.........toHaveTitle
    // await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box")
    // //..........tohaveValue
    // await page.getByPlaceholder("Enter your name").fill("Sasmita")
    // await expect(page.getByPlaceholder("Enter your name",{exact:true})).toHaveValue("Sasmita")
    // //.............tohavescreenshot
    // await page.screenshot({path:"screenshot/ss1.png"})
    // await expect(page).toHaveScreenshot("screenshot/ss1.png")
    //.......tohavetext()
    await expect(page.locator('//h1[.="Register"]')).toHaveText("Register")
    await expect(page.locator('//h1[.="Register"]')).toContainText("Reg")
     await expect(page.locator('//h1[.="Register"]')).toHaveText("Regis")

})
//non-retrying assertion
test("non_retrying",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    let text = await page.locator('//h1[.="Register"]').textContent()
    await expect(text).toBe("Register")

    let title= await page.title()
    let url = await page.url()

    await expect(title).toContain("DemoApps | Qspiders")
    await expect(url).toMatch(/scenario=1/)

    let status="hello"
    await expect(status).toBeTruthy()

    let name=""
    await expect(name).toBeFalsy()

    let name1;
    await expect(name1).toBeUndefined()

    
})

//soft assertion
test("soft_assertion",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    let text = await page.locator('//h1[.="Register"]').textContent()
    await expect.soft(text).toBe("Regis")
     let title= await page.title()
     await expect(title).toContain("DemoApps | Qspiders")
})

//negating assertion
test("negating_assertion",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    let text = await page.locator('//h1[.="Register"]').textContent()
    await expect.soft(text).not.toBe("Regis")
    let title= await page.title()
     await expect(title).not.toContain("DemoApps | Qspiders")

})
//Asymmetric assertion
test("Asymmetric_assertion",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    //expect.stringcontaing()
    let text = await page.locator('//button').textContent()
    expect(text).toEqual(expect.stringContaining("Regis"))

    //expect.stringMatching()
    //expect(text).toEqual(expect.stringMatching(/Register/))
    expect(text).toEqual(expect.stringMatching("Regis"))

    //expect.arraycontaing()
    let flowers=["sunflower","rose","lily","lotus"]
    expect(flowers).toEqual(expect.arrayContaining(["lotus","rose"]))

    //expect.objectcontaing()
    let user={
        name:"sas",
        age:26,
        rollno:35,
    }
    expect(user).toEqual(expect.objectContaining({name:"sas",rollno:35}))

    // expect.anything()
    let user1={
        name:"sas",
        age:26,
        
    }
    expect(user1).toEqual({name:expect.anything(),age:expect.anything()})

    //expect.any()
    let user2={
        name:"sas",
        age:26,
        
    }
    expect(user2).toEqual({name:expect.any(String),age:expect.any(Number)})

    let isnumber=true
    expect(isnumber).toEqual(expect.any(Boolean))
})

// expect.poll assertion
test.only("poll_assertion",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await expect.poll(async()=>{
        return await page.title()
    },"poll assertion").toContain("Demo")
})
