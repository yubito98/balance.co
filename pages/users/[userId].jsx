import React from "react";
import Header from "../../components/Header"
import { useRouter } from 'next/router';
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "../../functions/getUser";

const UserId = () =>{

    const [user, setUser] = useState(null);


    const {query: 
        { userId },
    } = useRouter();

    useEffect(() =>{
        getUser(userId, setUser);
    })


    return(
        <>
            <Header/>
            {user != null ?(

                <h1>Hola, {user.role}. Es hora de que equilibres tu vida</h1>

                
            ): ("No hay usuario")
            }
            
        </>
    )
}

export default UserId;