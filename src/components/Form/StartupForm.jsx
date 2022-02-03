import { useRouter } from "next/router"
import { Formik, Form } from "formik"
import { TextField } from "../Fields/TextField"
import { Button } from "../Buttons/Button"
import styles from "./styles.module.scss"
import { SelectField } from "../Fields/SelectField"
import { useState } from "react"

export function StartupForm({ handleClick, initialValues = {}, buttonLabel, additionalClasses = "" }, ...props) {
   const router = useRouter()
   const [type, setType] = useState("")

   const handleChange = (e) => {
      setType(e.target.value)
   }

   if (router.pathname == "/startups/create") {
      return (
         <Formik
            onSubmit={handleClick}
            initialValues={initialValues}
            className={[styles.Form, additionalClasses].join(" ")}
         >
            <Form>
               <TextField name="name" type="text" placeholder="Nome" label="Nome" />
               <TextField name="description" type="text" placeholder="Descrição" label="Descrição" />
               <SelectField name="type" label="Tipo" value={type} onChange={handleChange}>
                  <option value="agritech">AgriTech</option>
                  <option value="autotech">AutoTech</option>
                  <option value="biotech">BioTech</option>
                  <option value="citytech">CityTech</option>
                  <option value="cleantech">CleanTech</option>
                  <option value="construtech">ConstruTech</option>
                  <option value="edtech">EdTech</option>
                  <option value="energytech">EnergyTech</option>
                  <option value="fashiontech">FashionTech</option>
                  <option value="fintech">FinTech</option>
                  <option value="foodtech">FoodTech</option>
                  <option value="govtech">GovTech</option>
                  <option value="healthtech">HealthTech</option>
                  <option value="hrtech">HRTech</option>
                  <option value="indtech">IndTech</option>
                  <option value="legaltech">LegalTech</option>
                  <option value="logtech">LogTech</option>
                  <option value="martech">MarTech</option>
                  <option value="retailtech">RetailTech</option>
                  <option value="traveltech">TravelTech</option>
               </SelectField>
               <TextField name="location" type="text" placeholder="Localização" label="Localização" />
               <Button label={buttonLabel} />
            </Form>
         </Formik>
      )
   } else {
      return (
         <Formik
            onSubmit={handleClick}
            initialValues={initialValues}
            className={[styles.Form, additionalClasses].join(" ")}
         >
            <Form>
               <SelectField name="type" label="Tipo" value={type} onChange={handleChange}>
                  <option value="agritech">AgriTech</option>
                  <option value="autotech">AutoTech</option>
                  <option value="biotech">BioTech</option>
                  <option value="citytech">CityTech</option>
                  <option value="cleantech">CleanTech</option>
                  <option value="construtech">ConstruTech</option>
                  <option value="edtech">EdTech</option>
                  <option value="energytech">EnergyTech</option>
                  <option value="fashiontech">FashionTech</option>
                  <option value="fintech">FinTech</option>
                  <option value="foodtech">FoodTech</option>
                  <option value="govtech">GovTech</option>
                  <option value="healthtech">HealthTech</option>
                  <option value="hrtech">HRTech</option>
                  <option value="indtech">IndTech</option>
                  <option value="legaltech">LegalTech</option>
                  <option value="logtech">LogTech</option>
                  <option value="martech">MarTech</option>
                  <option value="retailtech">RetailTech</option>
                  <option value="traveltech">TravelTech</option>
               </SelectField>
               <TextField name="location" type="text" placeholder="Localização" label="Localização" />
               <Button label={buttonLabel} />
            </Form>
         </Formik>
      )
   }
}
