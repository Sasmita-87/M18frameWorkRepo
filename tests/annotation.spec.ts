import { test } from '@playwright/test';

test.describe("loginTest", () => {

    test("valid credential", async ({ page }) => {
        console.log("valid test");
    });

    test("invalid test", async () => {
        console.log("invalid test");
    });

});
test("timeout",async({page})=>{
     test.setTimeout(60000)
     await page.goto("https://www.amazon.in/")
})