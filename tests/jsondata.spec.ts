import{test} from '@playwright/test'
import data from "../DDT/jsondata.json"

// test("single data",async()=>{
//     // console.log(data.greet);
//     // console.log(data.subject);
    
    
// })

test("multiple data",async()=>{
    // data.forEach((d)=>{
    //      console.log(d.greet);
    // });

   
})

test("single set of data",async({page})=>{
//     await page.goto(data.url)
//     await page.getByLabel("Username",{exact:true}).fill(data.username)
//     await page.getByLabel("Password",{exact:true}).fill(data.password)
})

test("multiple data set",async({page})=>{
//     for(let testdata of data)
//     {
//         let url=testdata.url
//         let username = testdata.username
//         let password = testdata.password

//         await page.goto(url)
//         await page.getByLabel("Username",{exact:true}).fill(username)
//         await page.getByLabel("Password",{exact:true}).fill(password)
// await page.locator('button#submit').click()
//     }
})
test("multiple data set for valid",async({page})=>{
//     for(let testdata of data.valid)
//     {
//         let url=testdata.url
//         let username = testdata.username
//         let password = testdata.password

//         await page.goto(url)
//         await page.getByLabel("Username",{exact:true}).fill(username)
//         await page.getByLabel("Password",{exact:true}).fill(password)
// await page.locator('button#submit').click()
//     }
})

test.only("multiple data set  for invalid",async({page})=>{
    for(let testdata of data.invalid)
    {
        let url=testdata.url
        let username = testdata.username
        let password = testdata.password

        await page.goto(url)
        await page.getByLabel("Username",{exact:true}).fill(username)
        await page.getByLabel("Password",{exact:true}).fill(password)
await page.locator('button#submit').click()
    }
})