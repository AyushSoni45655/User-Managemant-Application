import axios from "axios";
import { data } from "react-router-dom";

// Base Url

const base = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com"
});

// Get Api function

export const getComments = ()=>{
  return base.get("/users");
}

// post api function
export const postComments = (data)=>{
  return base.post("/users",data);
}
// Update api function
export const editPostComments = (id,post)=>{
  return base.put(`/users/${id}`,post)
}
// delete api function
export const deleteComments = (id)=>{
  return base.delete(`/users/${id}`)
}