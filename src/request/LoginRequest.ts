import { URLAuth } from "../utils/Constains";
import {user} from "../types/types"


export const setUserLocalStorage = (user: user | null ) =>{
    localStorage.setItem("User-", JSON.stringify(user))

}
export const getUserLocalStorage = () => {
    const storage = localStorage.getItem("User-")
    if(storage){
        return JSON.parse(storage)
    }
    else{
        return null
    }
}


export const LoginRequest = async (email: string, password: string)=>{
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password}),
        };

    const request = await fetch(`${URLAuth}login`, options).then(response=> response.json()).then(data=> data).catch(()=> null)
    return request
       
}