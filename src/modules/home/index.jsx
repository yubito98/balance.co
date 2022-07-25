import Header from "../../components/header";
import styles from "./home.module.css"
import copy from "./copy.json"
import Link from "next/link";
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
                        <Link href={copy.link.url}>
                            <a className="btn btn-primary button isSecondary">{copy.link.text}</a>
                        </Link>
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