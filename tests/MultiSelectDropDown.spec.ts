import{test} from '@playwright/test'
test("multiselect dropdown",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    // option 1....using selectOption
    await page.locator('#select-multiple-native').selectOption([{value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},{value:"Mens Cotton Jacket"},{value:"White Gold Plated Princess"}])
    
   //using keyboard method 
    await page.getByTitle("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",{exact:true}).click()
    await page.keyboard.press("Shift+ArrowDown")
     await page.keyboard.press("Shift+ArrowDown")
      await page.keyboard.press("Shift+ArrowDown")
       await page.keyboard.press("Shift+ArrowDown")

    
    
    await page.getByRole("button",{name:"Add"}).click()
    })
    test.only("custom dropdown",async({page})=>{
        await page.goto("https://www.amazon.in/s?k=shoes&crid=XBNJ6DE5Z8K&sprefix=shoes%2Caps%2C253&ref=nb_sb_noss_2")
        await page.locator('#s-result-sort-select').click({force:true})
        await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
        // let options = await page.locator('//a[@class="a-dropdown-link"]').all()
        // for( let option of options){
        //     let text=await option.textContent()
        //     if(text!.includes('Best')){
        //         await option.click()
        //     }

        // }
        await page.locator('#s-result-sort-select_5').click()
    })