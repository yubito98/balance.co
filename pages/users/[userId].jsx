import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useState } from "react";
import { getCustomer } from "../../src/utils/getCustomer";
import { getCategories } from "../../src/utils/getCategories";
import Header from "../../src/components/header"
import Card from "../../src/components/card";

const UserId = () =>{

    const [user, setUser] = useState(null);
    const {query: { userId } } = useRouter();


    const [ category, setCategories] = useState(null);

    useEffect(() =>{
        getCustomer(userId, setUser);
        getCategories(setCategories);
    })


    return(
        <>
            <Header/>
            <div className="custom-container">
                {user != null ?(
                    <h1>Hola {user.name}. Es hora de que equilibres tu vida</h1>

                ): ("No hay usuario")
                }
            </div>
            <div className="custom-container d-flex justify-content-between">
                {category != null?(
                    category.map(item => (
                        <Card 
                        src={item.image}
                        title={item.name}
                        />
                        
                    ))
                ):(<p>No hay categorias</p>)}
                
            </div>
        </>
    )
}

export default UserId;