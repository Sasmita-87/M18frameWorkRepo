import{test} from '@playwright/test'
test("Dropdown",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator('#select3').selectOption({value:"India"})
    await page.locator('#select5').selectOption({label:"Odisha"})
    await page.locator('(//select[@class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"])[3]').selectOption({index:1})
})