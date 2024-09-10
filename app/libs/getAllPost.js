import axios from "axios"

const getAllPost = async() => {
  
 const response = await axios.get("http://localhost:5050/blogs");
 
 // error handle
 if(!response.data) throw new Error("Data not found");

 // response 
 return response.data
 
}

export default getAllPost
