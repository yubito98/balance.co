import { joinClassName } from "../../utils/joinClassName"
import { useForm } from "react-hook-form";
import styles from "./form.module.css"
import axios from "axios";


const Form = () =>{

    const url = "http://localhost:3000/api/v1/customers";

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{
        axios.post(url,{
            name: data.firstName,
            lastName:data.lastName,
            phone:data.phone,
            user:{
                email:data.email,
                password:data.password
            }
        })
        .then(res => {
            window.location.href=`http://localhost:3005/users/${res.data.userId}`
        })
    } 

    return(
        <form
        className={joinClassName([styles.form])}
        onSubmit={handleSubmit(onSubmit)}>
            <h1 className="mb-4">Registrarse</h1>
            <input placeholder="Nombre" className="input form-control mb-4" {...register("firstName")}/>
            <input placeholder="Apellido" className="input form-control mb-4" {...register("lastName")}/>
            <input placeholder="Celular" className="input form-control mb-4" {...register("phone")}/>
            <input placeholder="Email" className="input form-control mb-4" {...register("email")}/>
            <input placeholder="Contraseña" className="input form-control mb-4" {...register("password")}/>
            <input placeholder="Nombre" className="btn btn-primary button isPrimary mt-4" type="submit" />
        </form>
    )
}

export default Form;