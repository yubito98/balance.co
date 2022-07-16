import React from "react";
import styles from "../styles/TertiaryButton.module.css"

const TertiaryButton = ({text, href}) =>{
    return(
        <a
        className={styles.button + " btn btn-primary"}
        href={href}
        >
            {text}
        </a>
    )
}


export default TertiaryButton;