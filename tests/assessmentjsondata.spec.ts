import{test} from '@playwright/test'
import data from '../DDT/assessmentjson.json'
test("multiple data set for valid",async({page})=>{
    for(let testdata of data.valid)
    {
        let url=testdata.url
        let FirstName = testdata.FirstName
        let LastName = testdata.LastName
        let email= testdata.Email
        let gender1= testdata.Gender
        let gender2=testdata.Gender


        await page.goto(url)
        await page.getByPlaceholder("First Name",{exact:true}).fill(FirstName)
        await page.getByPlaceholder("Last Name",{exact:true}).fill(LastName)
        await page.getByPlaceholder("name@example.com",{exact:true}).fill(email)
        await page.getByLabel("Male",{exact:true}).click(gender1)
         await page.getByLabel("Female",{exact:true}).click(gender2)

    }
})