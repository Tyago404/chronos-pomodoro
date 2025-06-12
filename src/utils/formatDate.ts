import { format } from "date-fns"



export const formatDate = (timesTamp:number)=>{
 const date = new Date(timesTamp)
//utilizando date-fns
 return format(date, 'dd/MM/yyy HH:mm')
}