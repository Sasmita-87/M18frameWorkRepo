import test from "@playwright/test";
test("dialogs",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // event listioner
    page.on("dialog",async(dialog)=>{
        if (dialog.type()=="alert"){
            await dialog.accept()
        }
        else if(dialog.type()=="confirm"){
            await dialog.accept()
            console.log(await dialog.message());

        }
        else if(dialog.type()=="prompt"){
            console.log(await dialog.defaultValue());
            await dialog.accept("Sasmita")
            
        }

    })
    await page.getByRole("button",{name:"Simple Alert",exact:true}).click()
    page.on("dialog",async(dialog)=>{
        if (dialog.type()=="alert"){
            await dialog.accept()
        }
        else if(dialog.type()=="confirm"){
            await dialog.accept()
            console.log(await dialog.message());

        }
        else if(dialog.type()=="prompt"){
            console.log(await dialog.defaultValue());
            await dialog.accept("Sasmita")
            
        }

    })
    await page.getByRole("button",{name:"Confirmation Alert",exact:true}).click()
    page.on("dialog",async(dialog)=>{
        if (dialog.type()=="alert"){
            await dialog.accept()
        }
        else if(dialog.type()=="confirm"){
            await dialog.accept()
            console.log(await dialog.message());

        }
        else if(dialog.type()=="prompt"){
            console.log(await dialog.defaultValue());
            await dialog.accept("Sasmita")
            
        }

    })
    await page.getByRole("button",{name:"Prompt Alert",exact:true}).click()

})