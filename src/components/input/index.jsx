import styles from "./input.module.css"
import { joinClassName } from "../../utils/joinClassName"

const Input = ({type, placeholder, id, onChange, value, key}) =>{
    return(
        <input
            className={joinClassName([styles.input, "form-control mb-4"])}
            key={key}
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
         />
    )
}


export default Input;