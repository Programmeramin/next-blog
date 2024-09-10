import axios from "axios"

const getAllDevsData = async() =>{

 const response =   await axios.get(`http://localhost:5050/devs`);

    // validating
    if(!response.data) throw new Error("Devs data not found");

    return response.data;

}


export default getAllDevsData