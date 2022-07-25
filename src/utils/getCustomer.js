import axios from "axios"

const getCustomer = async (id, state) =>{
    const request = await axios.get(`http://localhost:3000/api/v1/customers/${id}`);
    state(request.data);

}


export {getCustomer};