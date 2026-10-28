import{test} from '@playwright/test'
test("getByMethods",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    //getbylabel
    await page.getByLabel("Name").fill("Sasmita")
    //getByPlaceholder
    await page.getByPlaceholder("Enter Your Email").type("sasmita@gmail.com")
    //getbytext
    await page.getByText("Register").last().click()
    //getbyalt
    await page.getByText("signin").click()
    //
    await page.getByText("With ToolTip").click()
    await page.getByAltText("Enter your Name").fill("Renuka")

})