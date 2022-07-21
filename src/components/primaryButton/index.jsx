
import styles from "./primaryButton.module.css"

const PrimaryButton = ({text, type}) =>{
    return(
        <button
        className={styles.button + " btn btn-primary"}
        type={type}
        >
            {text}
            
        </button>
    )
}


export default PrimaryButton;