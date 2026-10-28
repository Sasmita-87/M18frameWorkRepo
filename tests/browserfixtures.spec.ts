import { test } from '@playwright/test';
test("fixtures", async ({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://www.amazon.in");
})