import React from "react"
import Head from "next/head"
import { Header } from "../../components/Header/Header"
import { SectionWrapper } from "../../components/Wrappers/SectionWrapper"
import { StartupForm } from "../../components/Form/StartupForm"
import { RedirectButton } from "../../components/Buttons/RedirectButton"
import axiosClient from "../../services/api/axiosClient"

export default function StartupRegisterForm() {
   async function handleRegister(inputData) {
      await axiosClient
         .post("/startups", {
            name: inputData.name,
            description: inputData.description,
            type: inputData.type,
            street: inputData.street,
            district: inputData.district,
            city: inputData.city,
            state: inputData.state,
            country: inputData.country,
            postalCode: inputData.postalCode,
         })
         .then((response) => {
            window.alert("Startup Criada")
         })
         .catch((error) => {
            window.alert(error)
         })
   }

   return (
      <React.Fragment>
         <Head>
            <title>Startups</title>
         </Head>
         <Header title="Cadastro de Startup" />
         <SectionWrapper>
            <RedirectButton label="Voltar" href="/" />

            <div className="FormWrapper">
               <StartupForm handleClick={handleRegister} buttonLabel={"Cadastrar Startup"} />
            </div>
         </SectionWrapper>
      </React.Fragment>
   )
}
