import{test} from "@playwright/test"
import excel from "exceljs"
//import path from "path"
import * as path from "path";

test("read single data",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelfile1.xlsx"))
    let sheet = await book.getWorksheet("Sheet1")
    let data1 = await sheet?.getRow(1).getCell(1).toString()
    console.log(data1);

    
    let data2 = await sheet?.getRow(2).getCell(1).toString()
    console.log(data2);


        let data3 = await sheet?.getRow(1).getCell(2).toString()
    console.log(data3);


    
    
})
 test("read multiple data",async()=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelfile1.xlsx"))
    let sheet = await book.getWorksheet("Sheet2")
    for (let colm=1;colm<=sheet!.actualColumnCount;colm++){
        for(let row=1;row<=sheet!.actualRowCount;row++){
            let data=await sheet?.getRow(row).getCell(colm).toString()
            console.log(data);
            //let row=1;row<=sheet!.actualRowCount;row++
            //colm=1;colm<=sheet!.actualColumnCount;colm++
            
        }
    }

})
test.only("data for application",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelfile1.xlsx"))
    let sheet = await book.getWorksheet("Sheet3")
    let allData:any[]=[]
    let headers=sheet?.getRow(1).values
      
    let urlIndex:number=-1;
    let usernameIndex:number=-1;
    let passwordIndex:number=-1;

    if(Array.isArray(headers)){
        urlIndex=headers.findIndex(value=>value==="URL")
        usernameIndex=headers.findIndex(value=>value==="Username")
        passwordIndex=headers.findIndex(value=>value==="Password")


    }
    for(let row=2;row<=sheet!.actualRowCount;row++){
        let URL=sheet?.getRow(row).getCell(urlIndex).value?.toString()
        let Username=sheet?.getRow(row).getCell(usernameIndex).value?.toString()
        let Password=sheet?.getRow(row).getCell(passwordIndex).value?.toString()
        
    allData.push({
        link:URL,
        user:Username,
        password:Password 
      })
    console.log(allData);

    for (let d of allData){
        await page.goto(d.link)
        await page.locator('input#username').fill(d.user)
        await page.locator('input#password').fill(d.password)
        await page.locator('button#submit').click()
        
    }
    
    }


})

