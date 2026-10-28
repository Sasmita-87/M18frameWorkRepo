import{test,expect}from '@playwright/test'
import path from "path"
import fs from "fs"

test("download file",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here",{exact:true}).fill("my downloaded file")
    await page.locator("#fileName").fill("newfile.txt")

    let[downloadFile]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:"Download",exact:true}).click()
    ])
    
    let downloadedfolder="C:/Users/nihar/OneDrive/Desktop/playwright/tests/downloadfoalder"
    let filename=downloadFile.suggestedFilename()
    await downloadFile.saveAs(path.join(downloadedfolder,filename))
    let filepath= path.join(downloadedfolder,filename)
    let data= fs.readFileSync(filepath,'utf-8')
     
   
    //console.log(await downloadFile.path());
})