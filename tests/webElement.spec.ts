import {test} from '@playwright/test'
test("webElement",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    //Fill()
    await page.getByPlaceholder("Enter your name",{exact:true}).fill("student")
    await page.getByPlaceholder("Enter Your Email",{exact:true}).type("student@gmail.com")
    // await page.getByPlaceholder("Enter your name",{exact:true}).fill("student123")
    // await page.getByPlaceholder("Enter Your Email",{exact:true}).type("student1234@gmail.com")
    // //click()
    await page.locator('//button[text()="Register"]').click()
    //innertext() and textContent()

    let text1 = await page.locator('//h1[text()="Register"]').innerText()
    console.log(text1);
    
     let text2 = await page.locator('//h1[text()="Register"]').textContent()
     console.log(text2);
     



})
//allinnertext() and alltextconext()
test("test1",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let text1=await page.locator('.form-check-label').allInnerTexts()
    console.log(text1);
    //getattribute()
    let text2=await page.locator("#name").getAttribute("id")
    console.log(text2);
    
    })

//first(),last(),nth()
test("test2",async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("shoes")
    let text1 = await page.locator('.s-suggestion-container').nth(1).textContent()
    console.log(text1);
    
    await page.locator('.s-suggestion-container').last().waitFor()
    let text = await page.locator('.s-suggestion-container').allTextContents()
    console.log(text);
})
test.only("test3",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
   await page.locator('#name').waitFor()
   let result= await page.locator('#name').isVisible()
   let result1=await page.locator('#name').isEditable()
   let result2= await page.locator('#name').isEnabled()
   let result3= await page.locator('#name').isDisabled()
   let result4= await page.locator('#name').isChecked()
   
   console.log(result);
    console.log(result1);
     console.log(result2);
      console.log(result3);
      console.log(result4);//Error: locator.isChecked: Error: Not a checkbox or radio button
    //Call log:
      
   
})
    