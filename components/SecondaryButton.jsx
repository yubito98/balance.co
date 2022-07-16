import React from "react";
import styles from "../styles/SecondaryButton.module.css"

const SecondaryButton = ({text, type}) =>{
    return(
        <button
        className={styles.button + " btn btn-primary"}
        type={type}
        >
            {text}
        </button>
    )
}


export default SecondaryButton;