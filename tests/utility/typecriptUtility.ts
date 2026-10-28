export async function getRandomNumber(
    min:number,
    max:number

){
return (Math.floor(Math.random()*(max-min+1)))+min
}

/*
*Math.random()----generate a random no //from 0 to 1...a decimal no
*max-min+1-------->10-5+1....max no can be generated out of the no.
*multiply (Math.random()*(max-min+1))
*Math.floor().......> rounds the no. to the nearest integer


*/
 export async function getRandomString(

    length:number

 ){

    return Math.random().toString(36).substring(2,2+length)
 }

 /*
 *Math.random()---->generate random no
 *tostring()-----------> convert the no into base 36 string using digits and letters
 substring(sarting index,end index)------->extract the portion of the string
 end index+2------> as random no = decimal
                   so +2 consider the after decimal characters
 */

export function getCurrentDate(){
    return new Date().toISOString().split("T")[0]
}

export function getTimestamp(){
    return Date.now()
}

export function getDate(

    days: number
){
     let date = new Date
     date.setDate(date.getDate()+days)
     return date.toISOString().split("T")[0]
}