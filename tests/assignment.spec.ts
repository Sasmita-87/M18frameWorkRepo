import{test,expect } from '@playwright/test'
test("makemytrip",async({page})=>{
    await page.goto("https://www.makemytrip.com/")
    await page.click('//span[text()="Departure"]')
    let nextMonth = await page.locator('//span[@aria-label="Next Month"]')
    for(let i=0;i<3;i++){
         await nextMonth.click()

    }
    await page.click('//div[@class="DayPicker-Day" and @aria-label="Sun Jan 24 2027"]')


})

test("icc Cricket Rating",async({page})=>{
    await page.goto("https://www.icc-cricket.com/rankings")
    let name="steve"
    let rating = await page.textContent('//span[.="$(name)"]/ancestor::td[@class="w-[calc(100%-110px)] align-middle"]/preceding-sibling::td//span[@class="text-xs font-extrabold uppercase text-primary pr-2"]')
    console.log(rating);
    
})
test("amazon",async({page})=>{
    await page.goto(" http://amazon.in")
    // let signing_boundary = await page.locator('#nav-link-accountList').boundingBox()
    // await page.mouse.move(signing_boundary?.x, signing_boundary?.y)
 await page.locator('#nav-link-accountList').hover()
    await page.click('//span[.="Sign in"]/parent::a[@data-nav-role="signin"]')

})
test("clinique",async({page})=>{
    await page.goto("https://www.clinique.com/")
    await page.locator('//a[@title="bag icon"]').d
    // await page.locator('//a[@title="bag icon"]').waitFor()
    // let result=await page.locator('//a[@title="bag icon"]').isVisible
    // console.log(result);
    
})
test("amazon_samsungphone",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("samsung phone")
    await page.locator('#nav-search-submit-button').click()
    let price = await page.locator(' //a[@aria-describedby="price-link"]//span[text()="11,999"]').textContent()
    console.log(price);
    
})
test("amazon_android_checkbox",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("phone")
    await page.locator('#nav-search-submit-button').click()
    await page.locator('//a[@aria-label="Apply the filter Android 13.0 to narrow results"]//i').click()

})
test("flipkart_cart",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    let cart = await page.locator('//a[@href="/viewcart?marketplace=FLIPKART"]/span[@style="color:#333333ff"]').isVisible
    console.log(cart);
    
})
//..................
test("validation_shoes",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    await page.locator('#nav-search-submit-button').click()

    let pdt= await page.locator('//div[@role="listitem"]//div[@data-cy="title-recipe"]/div/h2/span[@class="a-size-base-plus a-color-base" and text()="Bacca Bucci"]').textContent()
    expect(pdt).toEqual(expect.stringContaining("Bacca"))
    console.log(pdt);
    let price = await page.locator('//span[@class="a-price-whole"]/ancestor::div[@class="a-row"]//span[@data-a-size="xl"]//span[@class="a-price-whole" and .="1,698"]').textContent()
    expect(price).toEqual(expect.stringMatching("1,698"))
    console.log(price);
    
})

test("amazon_searchProduct",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    await page.locator('#nav-search-submit-button').click()
    await Promise.all([
        page.waitForURL("https://www.amazon.in/s?k=shoes&crid=2O2HM96HI94QU&sprefix=shoes%2Caps%2C393&ref=nb_sb_noss_2"),
     page.locator('//*[@id="2c1c969e-ea9c-4fea-b1c6-476cd9984620"]/div/div/span/div/div/div[2]/div[2]/div/h2/span'),
     page.locator('//*[@id="2c1c969e-ea9c-4fea-b1c6-476cd9984620"]/div/div/span/div/div/div[2]/div[4]/div[1]/div[1]/a/span[1]/span[2]/span[2]')      
    ])

    //expect(page).toHaveURL("https://www.amazon.in/s?k=shoes&ref=nb_sb_noss")
    //expect(page.locator('//*[@id="2c1c969e-ea9c-4fea-b1c6-476cd9984620"]/div/div/span/div/div/div[2]/div[2]/div/h2/span')
    //expect(page.getByText("1,199",{exact:true})).toBeVisible()
    let product=await page.locator('//*[@id="2c1c969e-ea9c-4fea-b1c6-476cd9984620"]/div/div/span/div/div/div[2]/div[2]/div/h2/span').textContent()
    let price=await page.locator('//*[@id="2c1c969e-ea9c-4fea-b1c6-476cd9984620"]/div/div/span/div/div/div[2]/div[4]/div[1]/div[1]/a/span[1]/span[2]/span[2]').textContent()
    console.log(product);
    console.log(price);
    
    
    




})
test("keyboardaction",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('input#username').click()
    await page.keyboard.type("student")
    // await page.locator('input#username').click()
    await page.keyboard.press("Space")
    await page.keyboard.type("stud")
    await page.keyboard.press("Control+A")
   // await page.keyboard.up("Control+A")
    await page.keyboard.press("Control+C")
    //await page.keyboard.up("Control+C")
    await page.keyboard.down("Tab")
    await page.keyboard.up("Tab")
    await page.keyboard.press("Control+V")
    //await page.keyboard.up("Control+V")
    await page.locator('button#submit').click()
})
//url:https://demoqa.com/automation-practice-form
//use keyboard action and mouse action to fill the form
//apply atleast 4 assertion method
test("taskFill the form",async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
     await expect(page).toHaveURL("https://demoqa.com/automation-practice-form")
     await page.locator('#firstName').click()
     await page.keyboard.type("Sasmita")
     await page.keyboard.press("Tab")
     await page.locator('#lastName').click()
     await page.keyboard.insertText("Mohapatra")
     await page.keyboard.press("Tab")
     await page.locator('#userEmail').click()
     await page.keyboard.type("sas@gmail.com")
     await expect(page.locator('#userEmail')).toBeVisible()
     await page.keyboard.press("Tab")
     await page.locator('#gender-radio-2').hover()
     await page.locator('#gender-radio-2').click()
     await page.keyboard.press("Tab")
     await page.locator('#userNumber').click()
     await page.keyboard.type("9867512334")
     await page.keyboard.press("Tab")
     await page.locator('//div[@aria-label="Choose Friday, September 25th, 2026"]').hover()
     await page.locator('//div[@aria-label="Choose Friday, September 25th, 2026"]').click()
    //  await expect(page.getByText('25 Sep 2026')).toBeVisible()
     await page.keyboard.press("Tab")
     await page.locator('#subjectsInput').click()
     await page.keyboard.type("playwright")
     await page.locator('#hobbies-checkbox-2').check()
     await page.locator('#hobbies-checkbox-3').check()
     await expect(page.locator('#hobbies-checkbox-2')).toBeChecked()
     await expect(page.locator('#hobbies-checkbox-3')).toBeChecked()
      await page.keyboard.press("Tab")
     await page.locator('#uploadPicture').click()
      await page.keyboard.press("Tab")
await page.getByPlaceholder('Current Address').fill("Bengaluru,pin-560068")
await page.keyboard.press("Tab")
await page.locator('//*[@id="state"]/div/div[1]/div[2]').selectOption({index:2})
await page.locator('#react-select-4-placeholder').selectOption({index:2})
await expect(page.getByText('Uttar Pradesh')).toBeVisible()
await page.locator('#submit').click()

})
test("multitab in FLipkart",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com/")
    await page.locator('(//input[@class="nw1UBF v1zwn26"])[1]').fill("Shoes")
    await page.locator('//button[@class="XFwMiH" and @type="submit"]/*[name()="svg"]').click()
     let [page2] =await Promise.all([
        page.waitForEvent("popup"),
        page.locator('(//img[@class="MZeksS"])[1]').click()
])
await page2.locator('(//div[@class="v1zwn26 _1psv1zeb9 _1psv1ze0"])[1]').click()

})

test.only("popup multitab",async({browser})=>{
     let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1")
    
    let [page2]= await Promise.all([
        page.waitForEvent("popup"),
     page.getByRole('button',{name:'view more'}).first().click()
    
        ])
    await page2.getByRole('button',{name:'Add to Cart'}).click()
   
    let cartele=await page2.locator('//article[@class="h-5 w-5 bg-red-500 rounded-full absolute top-0 right-0 z-[10] text-white flex justify-center items-center text-xs"]').last()
    let cartCount= parseInt(await cartele.textContent()||"")
    
    await expect(cartCount).toBeGreaterThan(0)
    


})



test('Add watch to cart from new window', async ({browser }) => {

  
  

 let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")
    
    let [page2]= await Promise.all([
        page.waitForEvent("popup"),
     page.getByRole('button',{name:'view more'}).first().click()
    
        ])
    await page2.getByRole('button',{name:'Add to Cart'}).click()
   
    let cartele=await page2.locator('//article[@class="h-5 w-5 bg-red-500 rounded-full absolute top-0 right-0 z-[10] text-white flex justify-center items-center text-xs"]').last()
    let cartCount= parseInt(await cartele.textContent()||"")
    
    await expect(cartCount).toBeGreaterThan(0)
    

});

