import React from "react";
import { useState } from "react";
import Header from "../../components/Header"
import axios from "axios"

const AllUsers = () =>{


    const url = "http://localhost:3000/api/v1/users";
    const [user, setUser] = useState({
        role:"",
        email:"",
        password:""
        
    });

    const submitUser = (e) => {
        e.preventDefault();
        axios.post(url,{
            email: user.email,
            password: user.password,
            role: user.role
        })
        .then(res =>{
            console.log(res.data)
        })
    }

    const handle = (e) =>{
        const newUser = {...user};
        newUser[e.target.id] = e.target.value;
        setUser(newUser);
        console.log(newUser);
    }




    return(
        <>
            <Header/>
            <form
            onSubmit={(e) => submitUser(e)}
            >
                <input 
                type="text"
                placeholder="role"
                value={user.role}
                id="role"
                onChange={(e) => handle(e)}
                />
                <input 
                type="text" 
                placeholder="email"
                value={user.email}
                id="email"
                onChange={(e) => handle(e)}
                />
                <input 
                type="text" 
                placeholder="contraseña"
                value={user.password}
                id="password"
                onChange={(e) => handle(e)}
                />
                <button type="submit">Enviar</button>
            </form>
        </>
        
        
    )
}



export default AllUsers;