import fs from 'fs'

export async function readJSON(
    filepath:string
     
) {
   return JSON.parse(
    fs.readFileSync(filepath,"utf-8")
   ) 
}

