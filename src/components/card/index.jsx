import styles from "./card.module.css"
import work from "../../../public/assets/work.png"

const Card = ({src,title}) =>{
    return(

        <div className={styles.card} >
            <img src={src} />
            <h3>{title}</h3>
        </div>
    )
}



export default Card;