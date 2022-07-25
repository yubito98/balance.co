import styles from "./input.module.css"
import { joinClassName } from "../../utils/joinClassName"

const Input = ({placeholder}) =>{
    return(
        <input
            className={joinClassName([styles.input, "form-control mb-4"])}
            placeholder={placeholder}
         />
    )
}


export default Input;