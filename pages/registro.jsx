import React from "react";
import Header from "../components/Header"
import LayoutCentered from "../containers/LayoutCentered";
import Form from "../assemble/Form";
import BackgroundBottom from "../components/BackgroundBottom";



const SignUp = () =>{
    return(
        <>
            <Header/>
            <LayoutCentered>
                <Form
                    title="Registro"
                />
                <BackgroundBottom/>
            </LayoutCentered>
        </>
    )
}

export default SignUp;