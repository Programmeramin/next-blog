import axios from "axios";

const getSinglePost = async (slug) => {
 
    const response = await axios.get(`http://localhost:5050/blogs/?slug=${slug}`)
 
    // error handle
 if(!response.data) throw new Error("Data not found");

 // response 
 return response.data
 

};

export default getSinglePost
