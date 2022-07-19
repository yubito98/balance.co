import axios from "axios"

const getUser = async (id, state) =>{
    const request = await axios.get(`http://localhost:3000/api/v1/users/${id}`);
    state(request.data);

}


export {getUser};