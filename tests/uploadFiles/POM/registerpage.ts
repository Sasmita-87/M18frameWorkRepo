import{Locator,Page} from '@playwright/test'
//import data from ""../DDT/Registration.json'
class Register{

    page: Page;
    txtFName: Locator;
    txtLastName: Locator;
    txtEmail: Locator;
    RBtnMale: Locator;
    RBtnFemale: Locator;
    RBtnOthers: Locator;
    txtMobileNo: Locator;
    CalnDOB: Locator;
    DDyear: Locator;
    DDmonth: Locator;
    date: Locator;
    DDSubjects: Locator;
    CBoxSports: Locator;
    CBoxReading: Locator;
    CBoxMusic: Locator;
    UBtnChooseFile: Locator;
    txtAddress: Locator;
    DDstate: Locator;
    DDcity: Locator;
    BtnSubmit: Locator;

constructor(page: Page) {
    this.page = page
    this.txtFName = page.locator('#firstName')
    this.txtLastName = page.getByPlaceholder('Last Name', { exact: true });
    this.txtEmail = page.getByPlaceholder('name@example.com', { exact: true });
    this.RBtnMale = page.locator('#gender-radio-1');
    this.RBtnFemale = page.locator('#gender-radio-2');
    this.RBtnOthers = page.locator('#gender-radio-3');
    this.txtMobileNo = page.getByPlaceholder('Mobile Number', { exact: true });
    this.CalnDOB = page.locator('#dateOfBirthInput')
    this.DDyear = page.locator('.react-datepicker__year-select');
    this.DDmonth = page.locator('.react-datepicker__month-select');
    this.date = page.getByText('5', { exact: true });
    this.DDSubjects = page.locator('#subjectsInput' )
    this.CBoxSports = page.locator('#hobbies-checkbox-1')
    this.CBoxReading = page.locator('#hobbies-checkbox-2')
    this.CBoxMusic = page.locator('#hobbies-checkbox-3')
    this.UBtnChooseFile = page.locator('#uploadPicture')
    this.txtAddress = page.getByPlaceholder('Current Address', { exact: true })
    this.DDstate = page.locator('//div[@class="css-13cymwt-control"]' )
    this.DDcity = page.locator('#city')
    this.BtnSubmit= page.getByRole("button",{name:"Submit",exact:true})
}

    
    
//Lunch Url
async launchUrl(url){
    await this.page.goto(url)
}

//EnterName
async enterName(name,lastName,email){

    await this.txtFName.fill(name)
    await this.txtLastName.fill(lastName)
    await this.txtEmail.fill(email)

}

//Gender
async selectgender(gender: string) {
    if (gender === "Male") {
        await this.RBtnMale.click();
    }
    else if (gender === "Female") {
        await this.RBtnFemale.click();
    }
    else if (gender === "Others") {
        await this.RBtnOthers.click();
    }
    
}
//Mobile no

async enterMobileNo(mob){
    await this.txtMobileNo.fill(mob)
}
//DOB
 async selectDate(year,month){
    await this.CalnDOB.click()
    await this.DDyear.selectOption({label:year})
    await this.DDmonth.selectOption({value:month})
    await this.date.first().click()
    await this.page.keyboard.press("Tab")
 }
 //subjects

 async selectSubject(subject){
    await this.DDSubjects.fill(subject)
    await this.page.keyboard.press("ArrowDown")
    await this.page.keyboard.press("ArrowDown")
    await this.page.keyboard.press("Enter")
 }
 //hobbies
  async selectHobbies(hobbies){
    for(let hobby of hobbies){

    if(hobby==="Sports"){
        await this.CBoxSports.check()
    }
    else if (hobby === "Reading"){
        await this.CBoxReading.check()
    }
    else if (hobby === "Music"){
        await this.CBoxMusic.check()
    }
   }
  }
  async uploadPicture(picturepath){
    if(picturepath){
      await this.UBtnChooseFile.setInputFiles(picturepath)
    }
   }

   async enterAddress(address){
    await this.txtAddress.fill(address)
   }

   async selectStateAndCity(state,city){
    await this.DDstate.click()
    await this.page.getByText(state,{exact:true}).last().click()

    await this.DDcity.click()
    await this.page.getByText(city,{exact:true}).first().click()

   }

   async submitForm(){
    await this.BtnSubmit.click()
   }



}

export default Register