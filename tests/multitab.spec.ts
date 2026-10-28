import test from "@playwright/test";

test("multiTab Handle",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com/")
    await page.getByPlaceholder('Search for Products, Brands and More',{exact:true}).fill("Shoes")
    await page.keyboard.press("Enter")

    await page.locator('(//img[@class="MZeksS"])[1]').click()
    let page2= await context.newPage()
    await page2.goto("https://www.flipkart.com/bruton-eva-lite-sport-shoes-running-men/p/itmc708b7b639208?pid=SHOHBYCAJYYTMH2G&lid=LSTSHOHBYCAJYYTMH2GQZBMJX&marketplace=FLIPKART&q=shoes&store=osp&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=en_dFsT1_h1r9RIiDm1BnVVcI-yeEg3qR713XcmXxqUJN98RqQu8DnoaZEhn7f9KChRHvANdLgaOU3woUS7oifxwpco4ZV0n1CLwbOJqnArmveRVwG-Si52W-cXISKA6alZ&ppt=sp&ppn=sp&ssid=s17rfpau7k0000001790575689863&qH=b0a8b6f820479900&ov_redirect=true")
    let text=await page2.locator('(//div[@class="v1zwn26 _1psv1zeb9 _1psv1ze0"])[1]').textContent()
    console.log(text);
    
})