import React from "react"
import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { SectionWrapper } from "../../../components/Wrappers/SectionWrapper"
import { ButtonWrapper } from "../../../components/Wrappers/ButtonWrapper"
import { Header } from "../../../components/Header/Header"
import { Button } from "../../../components/Buttons/Button"
import { RedirectButton } from "../../../components/Buttons/RedirectButton"
import { DeleteModal } from "../../../components/Modals/DeleteModal"
import axiosClient from "../../../services/api/axiosClient"

function StartupInformationPage({ startup }) {
   const router = useRouter()
   const [modalState, setModalState] = useState(false)
   const { id } = startup

   const handleClick = async (data) => {
      console.log(data.id)
      await axiosClient
         .delete(`/startups/${data.id}`)
         .then((data) => {
            window.alert("Startup Deletada")
            router.push("/")
         })
         .catch(function (error) {
            window.alert(error)
            console.log(error)
         })
   }

   return (
      <React.Fragment>
         <Head>
            <title>Startups</title>
         </Head>
         <Header title="Área de Startups" />

         <SectionWrapper>
            <ButtonWrapper additionalClasses="ButtonWrapper">
               <RedirectButton label="Voltar" href="/" />
               <RedirectButton href={`/startups/${id}/update/`} label="Alterar Startup" />
               <Button label="Deletar Startup" handleClick={() => setModalState(true)} />
               {modalState && (
                  <DeleteModal
                     isOpen={modalState}
                     closeModal={() => setModalState(false)}
                     handleClick={handleClick.bind(handleClick, startup)}
                  />
               )}
            </ButtonWrapper>
            <table>
               <tbody>
                  <tr>
                     <th>
                        <h1 className="TableTitle">Startup</h1>
                     </th>
                  </tr>

                  <tr>
                     <th>Nome</th>
                  </tr>
                  <tr>{<td>{startup.name}</td>}</tr>
                  <tr>
                     <th>Descrição</th>
                  </tr>
                  <tr>{<td>{startup.description}</td>}</tr>
                  <tr>
                     <th>Tipo</th>
                  </tr>
                  <tr>{<td>{startup.type}</td>}</tr>
                  <tr>
                     <th>Endereço</th>
                  </tr>
                  <tr>
                     {
                        <td>
                           <p>
                              Rua {startup.street} <hr /> Bairro {startup.district} <hr /> {startup.city} <hr />{" "}
                              {startup.state} <hr /> {startup.country} <hr />
                              CEP: {startup.postalCode}{" "}
                           </p>
                        </td>
                     }
                  </tr>
               </tbody>
            </table>
         </SectionWrapper>
      </React.Fragment>
   )
}

export async function getServerSideProps(ctx) {
   const { id } = ctx.query
   const startup = await axiosClient.get(`/startups/${id}`).then((response) => response.data)
   return { props: { startup } }
}

export default StartupInformationPage
