import axios from "axios"
import React from "react"
const PostAPi = async (url,body)=>{
   const Main_URL = 'http://localhost:5000/api/softwareListed'
console.log(body)
    const response = await axios.post('http://localhost:5000/api/softwareListed',{
        method:'POST',
        body : body
    })
    return response.json()
}
export default PostAPi;