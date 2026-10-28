import { test } from '@playwright/test';
test("fixtures", async ({ page })=>{
    await page.goto("https://www.amazon.in");
})