import{test} from '@playwright/test'
test('calender',async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator('#dateOfBirthInput').click()
    await page.locator('.react-datepicker__year-select').selectOption("2001")
    await page.locator('.react-datepicker__month-select').selectOption("June")
    await page.locator('//div[@class="react-datepicker__day react-datepicker__day--010 react-datepicker__day--selected"]').click()
})