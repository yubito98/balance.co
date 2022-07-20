import Header from "../../components/header";
import styles from "./home.module.css"
import Image from 'next/image'
import copy from "./copy.json"
import TertiaryButton from "../../components/tertiaryButton"
import { joinClassName } from '../../utils/joinClassName'

const Home = () =>{
    return(
        <>
            <Header/>
            <div className={styles.hero}>
                <div className={joinClassName([styles.heroContainer, "row"])}>
                    <div className="col-6" >
                        <h1>{copy.title}</h1>
                        <p>{copy.description}</p>
                        <TertiaryButton
                        text={copy.tertiaryButton.text}
                        href={copy.tertiaryButton.url}
                        />
                    </div>
                    <div className={joinClassName([styles.heroContainerImg, "col-6"])}>
                        <img src={copy.image} alt="" />
                    </div>

                </div>
            </div>
        
        </>
    )
}


export default Home;