import{test,expect} from '@playwright/test'
import Register from './uploadFiles/POM/registerpage';
import data from "../DDT/Registration.json"
import{Locator,Page} from '@playwright/test'
 
test("DemoQA Registration Form",async({page})=>{
     let registerPage = new Register(page)
     for(let user of data){
        await registerPage.launchUrl(user.url)
        await registerPage.enterName(user.name,user.lastName,user.email)
        console.log(await page.locator('#firstName').innerText)
        await expect(page.locator('#firstName')).toContainText("Sas")

        await registerPage.selectgender(user.gender)
        await registerPage.enterMobileNo(user.mob)
        await registerPage.selectDate(user.year,user.month)
        await registerPage.selectSubject(user.subject)
        await registerPage.selectHobbies(user.hobbies)
        await registerPage.uploadPicture(user.picturepath)
        await registerPage.enterAddress(user.address)
        await registerPage.selectStateAndCity(user.state,user.city)
        await registerPage.submitForm()
     }

})