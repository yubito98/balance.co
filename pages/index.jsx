import React from "react";
import Header from "../components/Header";
import TertiaryButton from "../components/TertiaryButton";
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import homeImage from "../assets/home-image.png"

const Home = () =>{
    return(
        <>
            <Header/>
            <div className={styles.hero}>
                <div className={styles.heroContainer + "  row"}>
                    <div className="col-6" >
                        <h1>Mejora tu vida!</h1>
                        <p>Balance.co es una herramienta que te ayudara a equilibrar los diferentes aspectos de tu vida para mejorar tu estabilidad emocional.</p>
                        <TertiaryButton
                        text="Comienza YA!"
                        href="http://localhost:3005/registro"
                        />
                    </div>
                    <div className="col-6">
                        <Image
                            src={homeImage}
                            alt="Picture of the author"
                            />
                    </div>

                </div>
            </div>
        
        </>
    )
}


export default Home;