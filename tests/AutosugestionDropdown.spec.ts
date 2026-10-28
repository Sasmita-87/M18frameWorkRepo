import test from "@playwright/test";
test("ausuggestion dropdown",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    await page.locator('//div[@role="row"]').first().waitFor()
    //let allsuggestions = await page.locator('//div[@role="row"]').all()
    // // for(let option of allsuggestions){
    // //     let text= await option.textContent()
    // //     if(text?.includes("rack")){
    // //         await option.click()
    // //         break;
    //     }
    // }
    //case2
    
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")


})



