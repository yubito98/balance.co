import Input from "../input"
import formData  from "./formData.js"
import { joinClassName } from "../../utils/joinClassName"
import styles from "./form.module.css"
import PrimaryButton from "../primaryButton"



const Form = () =>{
    return(
        <form className={joinClassName([styles.form])}>
            <h1 className="mb-4">Registrarse</h1>
            {formData.map(item => (
                <Input
                key={item.id}
                id={item.id}
                type={item.type}
                value={item.value}
                placeholder={item.placeholder}
                onChange={item.onChange}
                />
            ))}
            <PrimaryButton
            text="CONTINUAR"
            />
        </form>
    )
}

export default Form;