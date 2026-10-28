import{test} from '@playwright/test'
import { getRandomNumber } from './utility/typecriptUtility'
import { log } from 'node:console'
import { getRandomString } from './utility/typecriptUtility'
import { getCurrentDate } from './utility/typecriptUtility'
import { getTimestamp } from './utility/typecriptUtility'
import { getDate } from './utility/typecriptUtility'

test("typescript utility",async()=>{
    let data= await getRandomNumber(5000000000,10000000000)
    console.log(data);

    let data2= await getRandomString(5)
    console.log(data2+"@gmail.com");

    let date= getCurrentDate()
    console.log(date);

    let Timestamp= getTimestamp()
    console.log(Timestamp);

    //console.log(getDate(5));
    console.log(getDate(-5));
    
    
    
    
    
})