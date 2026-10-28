import{test} from '@playwright/test'
test("CustomWait",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForFunction(()=>{
        /*!document.readystate........checks HTML DOM structure i.e 
         elements are loaded/Elements are on the readtstate to perform actons or not */

    })
await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("shoes")
await page.waitForFunction(()=>{
    let ele = document.querySelectorAll(".s-suggestion-container")
    return ele.length>1
})



})