import axios from "axios"
import React from "react"
const PostAPi = async (url,body)=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify(body);
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch(`http://localhost:5000/api/${url}`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}

const GetApi = async (url)=>{
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
    
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  
  fetch(`http://localhost:5000/api/${url}`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
export default {PostAPi,GetApi};