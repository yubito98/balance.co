import React from "react";
import styles from "./tertiaryButton.module.css"

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