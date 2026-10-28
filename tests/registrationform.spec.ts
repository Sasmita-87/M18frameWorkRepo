import{test} from '@playwright/test'
import StudentRegistrationForm from './uploadFiles/POM/RegistrationFormpage'
import data from '../DDT/assessmentjson.json'

test("Pom+DDT in registration",async({page})=>{
        let RegistrationFormpage=new StudentRegistrationForm(page)


    for(let testdata of data.valid)
    {let url=testdata.url
        let FirstName = testdata.FirstName
        let LastName = testdata.LastName
        let email= testdata.Email
        let gender= testdata.Gender

        await page.goto(url)
        await RegistrationFormpage.txtFirstName.fill(FirstName)
    await RegistrationFormpage.txtLastName.fill(LastName)
    await RegistrationFormpage.txtEmail.fill(email)
    await RegistrationFormpage.RadioBtnGender.check()

    }

})