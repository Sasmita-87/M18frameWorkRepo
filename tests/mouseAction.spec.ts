import{expect, test} from '@playwright/test'
test("mouseAction",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.getByText('Yes',{exact:true}).click()
    let value='You selected "Yes"'
     await expect(value).toContain('You selected "Yes"')

     //........................right click

     await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
     await page.waitForTimeout(20000)
     await page.locator('#btn_a').click({button:'right'})
    await page.getByText('Yes',{exact:true}).click()
    
    let value1='You selected "Yes"'
     await expect(value1).toContain('You selected "Yes"')
     //..........................doubleclick
     await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
     await page.locator('#btn_a').click({clickCount:2})
     let value2='You selected "Yes"'
     await expect(value2).toContain('You selected "Yes"')

     //.............................



})
test("hover,Down,Up",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
    await page.locator("#circle").hover()
    // await page.mouse.down()
    // await page.waitForTimeout(5000)
    // await page.mouse.up()
     await page.locator('#circle').click({delay:5000})

})

test("move,boundaryBox",async({page})=>{
    await page .goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    let box = await page.locator('.w-5.h-5.mt-5.ml-3.cursor-pointer ').boundingBox()
     console.log((box));
     //await page.mouse.move(768.3500366210938,251.52500915527344)
     await page.locator('.w-5.h-5.mt-5.ml-3.cursor-pointer ').hover()
     
})

test("scrollmethod",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    //await page.locator('//input[@type="checkbox"]').click()...inbuitscrolling
    //await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()//.....external scrolling


    // vertical scrolling
    await page.mouse.wheel(0,1000)
    await page.mouse.wheel(0,-900)

    // horizontal scrolling
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.mouse.wheel(1000,0)
    await page.mouse.wheel(-900,0)

})

test.only("drag and drop",async({page})=>{
    //case 1
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    //traditional drag and drop method
    // await page.getByText("Mobile Charger",{exact:true}).hover()
    // await page.mouse.down()
    // await page.locator('//div[text()="Mobile Accessories"]/parent::div').hover()
    // await page.mouse.up()

    //inbuild drap and drop method
    await page.getByText("Mobile Charger",{exact:true}).dragTo(page.locator('//div[text()="Mobile Accessories"]/parent::div'))
    
    //case2:
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    await page.getByText("Drag Me",{exact:true}).hover()
    await page.mouse.move(200,500)
    await page.mouse.up()
})





    
    