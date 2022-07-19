import React from "react";
import styles from "../styles/Input.module.css"

const Input = ({type, placeholder, value, onChange, id}) =>{
    return(
        <input
            className={styles.input + " form-control mb-4" }
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            id={id}
         />
    )
}


export default Input;