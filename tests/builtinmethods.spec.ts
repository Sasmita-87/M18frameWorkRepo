import{test} from '@playwright/test'
test("builtInMethods",async({page})=>{
//     await page.goto("https://identity.kodekloud.com/registration?_gl=1%2A1xv82hk%2A_up%2AMQ..%2A_gs%2AMQ..%2A_gcl_aw%2AR0NMLjE3ODgyNzE5NzMuRUFJYUlRb2JDaE1Jcl9IeF84Zk5sZ01WZXFCc0NSMXh0eC1QRUFBWUFTQUFFZ0s3M3ZEX0J3RQ..%2A_gcl_au%2AMTkzNjE1ODQ2NC4xNzg4MjcxOTU5%2A_ga%2ANTM0NDE0MzUyLjE3ODgyNzE5NTk.%2A_ga_GNM9S6ZZKN%2AczE3ODgyNzE5NTgkbzEkZzEkdDE3ODgyNzE5NzMkajQ1JGwwJGg1NzkyNDE0MTIkZE54bVZjTUJqRnBNWWNJRGYzemZCM2puQi1YaW5feS13U0E.&gad_campaignid=21569912388&gad_source=1&gbraid=0AAAAACO3P69FOFQMU-9MRKBqIKBD8or3D&gclid=EAIaIQobChMIr_Hx_8fNlgMVeqBsCR1xtx-PEAAYASAAEgK73vD_BwE&hsa_acc=8039903603&hsa_ad=708732989947&hsa_cam=21569912388&hsa_dev=c&hsa_grp=166040192316&hsa_kw=kodekloud%20training&hsa_mt=b&hsa_net=adwords&hsa_src=g&hsa_tgt=kwd-1654521097918&utm_campaign=KK_SEM_IN_B2C-Acq_Brand_PM_B_PROS_NOA_SEP%2724&utm_campaign=KK_SEM_IN_B2C-Acq_Brand_PM_B_PROS_NOA_SEP%2724&utm_content=166040192316&utm_medium=cpc&utm_medium=ppc&utm_source=google&utm_source=adwords&utm_term=kodekloud%20training&utm_term=kodekloud%20training")
//    await page.getByText("Continue with Email").click()
//     await page.getByLabel("Your name").fill("Sasmita")
//     await page.goto("https://grafana.com/auth/sign-up/create-user?tech=target&redirecthPath=k6&adobe_mc_sdid=SDID%3D73A32DF10ED0B069-3164266ECC68F327%7CMCORGID%3D13CE764F60CADED00A495CC6%40AdobeOrg%7CTS%3D1788273169&adobe_mc_ref=https%3A%2F%2Fgrafana.com%2Fdocs%2Fk6%2Flatest%2Fjavascript-api%2Fk6-browser%2Fpage%2Fgetbyplaceholder%2F&redirectPath=k6")
//     await page.getByPlaceholder("Password").type("Sasmita123")
//     await page.getByText("Create my account").click()
//     await page.getByAltText("Grafana logo").click()
await page.goto("https://demowebshop.tricentis.com/login")
await page.getByRole("button",{name:'Search'}).click()
await page.goto("https://www.saucedemo.com/")
await page.getByTestId("username").fill("Sasmita")

    })