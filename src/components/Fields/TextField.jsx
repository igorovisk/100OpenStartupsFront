import { Field } from "formik"
import styles from "./styles.module.scss"

export function TextField({ name, placeholder, type = "text", values, additionalClasses = "", label, component }) {
   return (
      <>
         <label> {label} </label>
         <Field
            name={name}
            placeholder={placeholder}
            type={type}
            className={[styles.Input, additionalClasses].join(" ")}
            values={values}
            component={component}
         />
      </>
   )
}
