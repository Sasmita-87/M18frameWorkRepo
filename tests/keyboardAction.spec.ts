import{test}from '@playwright/test'
test("keyboard action",async({page})=> {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator('#name').click()
    //keyboard.type()
    await page.keyboard.type("Sasmita")
    //keyboard.press(),keyboarb.inserttext()
 //await page.locator('#email').click()
    await page.keyboard.press("Tab")
    await page.keyboard.insertText("sas123@gmail.com")

    //keyboard.down().keyboard.up()
   
    await page.keyboard.down("Tab")
    await page.keyboard.up("Tab")

    await page.keyboard.insertText("sas123")

    //Select,copy and paste
    await page.keyboard.press("Control+A")
    

    
})