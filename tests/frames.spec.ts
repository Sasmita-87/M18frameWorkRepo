import{test,expect}from '@playwright/test'
test("frames intro",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
   //Approach 1:
    let frame1= await page.frameLocator('//frame[@src="frame_1.html"]')
   await frame1.locator('[name="mytext1"]').fill("hello")
   //await page.frameLocator('//frame[@src="frame_1.html"]').locator('[name="mytext1"]').fill("hello")

   //approach 2
   let frame2 = await page.locator('//frame[@src="frame_2.html"]').contentFrame()
   await frame2.locator('[name="mytext2"]').fill("Bye")

   //frame 4
   let frame4 = await page.frameLocator('//frame[@src="frame_4.html"]').locator('[name="mytext4"]')
   await frame4.fill("HELLO WORLD")
    
    await expect(frame4).toHaveAttribute('name','mytext4')     
    

    //frame 5
    let frame5 = await page.frameLocator('//frame[@src="frame_5.html"]')
    //await page.locator('form#id5').fill("myworld")
   // console.log();

   //frame3
   //frame[@src="frame_3.html"]
   let frame3 = await page.frameLocator('//frame[@src="frame_3.html"]')
    await frame3.locator('[name="mytext3"]').fill("MY WORLD")
    //............
    let innerframe=await frame3.frameLocator('//iframe').locator('(//div[@class="AB7Lab Id5V1"])[2]')
    await innerframe.click()
    await expect(innerframe).toBeChecked()




    
    


})