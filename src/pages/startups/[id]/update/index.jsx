import React, { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { Header } from "../../../../components/Header/Header"
import { RedirectButton } from "../../../../components/Buttons/RedirectButton"
import { SectionWrapper } from "../../../../components/Wrappers/SectionWrapper"
import { StartupForm } from "../../../../components/Form/StartupForm"
import axiosClient from "../../../../services/api/axiosClient"

function UpdateStartup({ startup }) {
   const { id } = startup
   const router = useRouter()

   const handleClickUpdate = async (data) => {
      await axiosClient
         .put(`/startups/${data.id}`, {
            name: data.name,
            description: data.description,
            type: data.type,
            location: data.location,
         })
         .then((data) => {
            window.alert("Startup Alterada")
            router.push("/")
         })
         .catch(function (error) {
            console.log(error)
            //implementar box quando redirecionado
         })
   }

   return (
      <React.Fragment>
         <Head>
            <title>Startups</title>
         </Head>
         <Header title="Área de Startup" />
         <SectionWrapper>
            <RedirectButton label="Voltar" href={`/startups/${id}`} />
            <StartupForm initialValues={startup} handleClick={handleClickUpdate} buttonLabel={"Salvar"} />
         </SectionWrapper>
      </React.Fragment>
   )
}

export async function getServerSideProps(ctx) {
   const { id } = ctx.query
   const startup = await axiosClient.get(`/startups/${id}`).then((response) => response.data)
   return { props: { startup } }
}
export default UpdateStartup
