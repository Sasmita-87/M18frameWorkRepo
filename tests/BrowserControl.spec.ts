import { chromium, test} from '@playwright/test'
test("browserControls",async({page})=>{
    await page.goto("https://www.amazon.in/")

    //fetch the viewport size
    let size = page.viewportSize()
    console.log(size)

    //set the viewport size
    await page.setViewportSize({width:1000,height:500})
    let size1=page.viewportSize()
    console.log(size1);


    //Navigate to page
    await page.goto("https://www.flipkart.com/")

    //fetch the title
    let title=await page.title()
    console.log(title);

    //fetch the url
    let url=page.url()
    console.log(url);
    
})

// test.only("cookies",async({browser})=>{
//     let context= await browser.newContext()
//     let page = await context.newPage()
//     await page.goto("https://www.amazon.in/")
//     let cookies = await context.cookies()
//     console.log(cookies);
    
// })

//chromium launch
test("instance",async()=>{
    let browser=await chromium.launch()
    let context= await browser.newContext()
    let page = await context.newPage()
    await page.goto("hdhfghxddhdfhttps://www.amazon.in/")
    browser.close();
})

//to take screenshot()
test("ss",async({page,browser})=>{
    await page.goto("https://www.google.com/")
    await page.screenshot({path:"screenshot/ss.png"})
    let time = new Date().getTime()
    await page.screenshot({path:`screenshot/-page-${time}.png`})
})
