import { expect, test } from '@playwright/test'

test("element_based_waits", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    await page.getByPlaceholder("Search Amazon.in", { exact: true }).fill("shoes");

    // Element-based explicit wait
    // await page.locator(".s-suggestion-co").first().waitFor({
    //     timeout: 20000,
    //     state: "detached"
    // });

    await page.waitForSelector(".s-suggestion-container");

    let suggestions = await page.locator(".s-suggestion-container").allTextContents();

    console.log(suggestions);
})


test("waitForNavigation", async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    await Promise.all([
        page.getByText("Check Box", { exact: true }).click(),
        page.waitForNavigation()
    ])

    await expect(page).toHaveURL("https://demoapps.qspiders.com/ui/checkbox");

})

test.only("waitForURL", async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    await Promise.all([
        page.waitForURL("https://demoapps.qspiders.com/ui/checkbox?sublist=0"),
        page.getByText("Check Box", { exact: true }).click()
        
    ])
    await page.waitForLoadState("networkidle")

    await expect(page).toHaveURL("https://demoapps.qspiders.com/ui/checkbox?sublist=0");

})

test.only("waitForEvent", async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here",{exact:true}).fill("I am Downloading")

    let [downloadFile] = await Promise.all([
        page.waitForEvent("download"),
        page.locator('#downloadButton').click()
    ])

    console.log(await downloadFile.path());
    
})
