import{test} from'@playwright/test'
import { readExcel } from './utility/excelUtility'
import { getRowValues } from './utility/excelUtility';
import { getCellValue } from './utility/excelUtility';
import { writeExcel } from './utility/excelUtility';

test("excel utility",async()=>{
    // 
   // let value1=await getRowValues("C:/Users/nihar/OneDrive/Desktop/playwright/DDT/excelfile1.xlsx","Sheet2",3)
   // console.log(value1);

    // let value1=await getRowValues("C:/Users/nihar/OneDrive/Desktop/playwright/DDT/excelfile1.xlsx","Sheet2",4)
    // console.log(value1);

    // let value2=await getCellValue("C:/Users/nihar/OneDrive/Desktop/playwright/DDT/excelfile1.xlsx","Sheet2",2,3)
    // console.log(value2);

    
    let value3=await writeExcel("C:/Users/nihar/OneDrive/Desktop/playwright/DDT/excelfile1.xlsx","Sheet7",2,1,"Playwright")
    console.log(value3);


   
    
})