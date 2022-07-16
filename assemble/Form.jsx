import React from "react";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import styles from '../styles/Form.module.css'
import { useState } from "react";
import axios from "axios";


const Form = ({title}) =>{

    const url = "http://localhost:3000/api/v1/customers";

    const [customer, setCustomer] = useState({
        name:"",
        lastName:"",
        phone:"",
        user:{
            email:"",
            password:"",
        }
    });

    const submitCustomer = (e) => {
        e.preventDefault();
        axios.post(url,{
            name:customer.name,
            lastName:customer.lastName,
            phone:customer.phone,
            user:{
                email:customer.user.email,
                password:customer.user.password
            }
        })
        .then(res =>{
            console.log(res.data)
            //window.location.href = `http://localhost:3005/users/${res.data.id}`;
        })
        
    }

    const handle = (e) =>{
        const newCustomer = {...customer};
        if(["email","password"].includes(e.target.id)){
            newCustomer.user[e.target.id] = e.target.value;
        }else{
            newCustomer[e.target.id] = e.target.value;
        }
        setCustomer(newCustomer);
        console.log(newCustomer);
    }


    return(
        <form 
            className={styles.form}
            onSubmit={(e) => submitCustomer(e)}
        >
            <h1 className="mb-5" >{title}</h1>
            <Input
                type="text"
                placeholder="Ingresa tu nombre"
                value={customer.name}
                id="name"
                onChange={(e) => handle(e)}
            />
             <Input
                type="text"
                placeholder="Ingresa tu Apellido"
                value={customer.lastName}
                id="lastName"
                onChange={(e) => handle(e)}
            />
               <Input
                type="text"
                placeholder="Ingresa tu numero de celular"
                value={customer.phone}
                id="phone"
                onChange={(e) => handle(e)}
            />
              <Input
                type="text"
                placeholder="Ingresa tu email"
                value={customer.user.email}
                id="email"
                onChange={(e) => handle(e)}
            />
             <Input
                type="password"
                placeholder="Ingresa tu contraseña"
                value={customer.user.password}
                id="password"
                onChange={(e) => handle(e)}
            />
            <PrimaryButton
                type="submit"
                text="CONTINUAR"
            />
        </form>
    )
}

export default Form;