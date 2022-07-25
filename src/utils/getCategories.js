import axios from "axios";

const getCategories = async (state) =>{
    const request = await axios.get(`http://localhost:3000/api/v1/categories`);
    state(request.data);

}


export {getCategories};