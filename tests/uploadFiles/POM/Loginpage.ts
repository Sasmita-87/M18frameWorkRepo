import { Locator,Page } from "@playwright/test";
// import data from "..DDT\jsondata.json"
class Login{
    //properties
    page:page;
    txtUsername:Locator;
    txtPassword:Locator;
    BtnSubmit: Locator;


    constructor(page:Page){
        this.page=page
        this.txtUsername=page.getByLabel("Username",{exact:true})
        this.txtPassword=page.getByLabel("Password",{exact:true})
        this.BtnSubmit=page.locator('button#submit')
    }
    async loginMethod(url,username,password){
        await this.page.goto(url)
        await this.txtUsername.fill(username)
    await this.txtPassword.fill(password)
    await this.BtnSubmit.click()

    }
}

export default Login