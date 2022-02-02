import { useState } from "react"
import { Formik, Form } from "formik"
import { TextField } from "../Fields/TextField"
import { Button } from "../Buttons/Button"
import styles from "./styles.module.scss"

export function StartupForm({ handleClick, initialValues = {}, buttonLabel, additionalClasses = "" }) {
   return (
      <Formik
         onSubmit={handleClick}
         initialValues={initialValues}
         className={[styles.Form, additionalClasses].join(" ")}
      >
         <Form>
            <TextField name="name" type="text" placeholder="Nome" label="Nome" />
            <TextField name="description" type="text" placeholder="Descrição" label="Descrição" />
            <TextField name="type" type="text" placeholder="Tipo" label="Tipo" />
            <TextField name="street" type="text" placeholder="Rua" label="Rua" />
            <TextField name="district" type="text" placeholder="Bairro" label="Bairro" />
            <TextField name="city" type="text" placeholder="Cidade" label="Cidade" />
            <TextField name="state" type="text" placeholder="Estado" label="Estado" />
            <TextField name="country" type="text" placeholder="País" label="País" />
            <TextField name="postalCode" type="text" placeholder="CEP" label="CEP" />
            <Button label={buttonLabel} />
         </Form>
      </Formik>
   )
}
