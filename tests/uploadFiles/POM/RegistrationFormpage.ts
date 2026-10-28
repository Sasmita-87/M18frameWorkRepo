import { Locator,Page } from "@playwright/test";
class StudentRegistrationForm{
    //properties
    page:Page;
    txtFirstName :Locator;
    txtLastName :Locator;
    txtEmail : Locator;
    RadioBtnGender1 : Locator;
    RadioBtnGender2 : Locator



    constructor(page:Page){
        this.page=page
        this.txtFirstName=page.getByPlaceholder("First Name",{exact:true})
        this.txtLastName=page.getByPlaceholder("Last Name",{exact:true})
        this.txtEmail=page.getByPlaceholder("name@example.com",{exact:true})
        this.RadioBtnGender1 = page.getByLabel("Male",{exact:true})
        this.RadioBtnGender2= page.getByLabel("Female",{exact:true})
    }
}

export default StudentRegistrationForm