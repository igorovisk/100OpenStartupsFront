import React, { useState } from "react"
import Head from "next/head"
import { Header } from "../components/Header/Header"
import { SectionWrapper } from "../components/Wrappers/SectionWrapper"
import { StartupBox } from "../components/Wrappers/StartupBox"
import { RedirectButton } from "../components/Buttons/RedirectButton"
import axiosClient from "../services/api/axiosClient"

const StartupList = ({ startups }) => {
   const [searchText, setSearchText] = useState("")

   return (
      <React.Fragment>
         <Head>
            <title>Startups</title>
         </Head>
         <Header title="Startups" />
         <SectionWrapper>
            <div>
               <div className="SearchBox">
                  <input
                     placeholder="Buscar por nome de startup"
                     type="text"
                     name="startupName"
                     onChange={(event) => {
                        setSearchText(event.target.value)
                     }}
                  />
               </div>
               <div className="Cadastrar Startup">
                  <RedirectButton href="/startups/create" label="Cadastrar Startup" />
               </div>
            </div>

            <table>
               <tbody>
                  {startups
                     .filter((val) => {
                        if (searchText == " ") {
                           return val
                        } else if (val.name.toLowerCase().includes(searchText.toLowerCase())) {
                           return val
                        }
                     })
                     .map((startup) => {
                        return (
                           <StartupBox>
                              <td>
                                 <a href={`http://localhost:3000/startups/${startup.id}`}>{startup.name}</a>
                              </td>
                           </StartupBox>
                        )
                     })}
               </tbody>
            </table>
         </SectionWrapper>
      </React.Fragment>
   )
}
export async function getServerSideProps() {
   const startups = await axiosClient
      .get(`/startups`)

      .then((response) => response.data)

   return { props: { startups } }
}

export default StartupList
