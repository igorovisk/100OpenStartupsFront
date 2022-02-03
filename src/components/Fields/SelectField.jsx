import { Field } from "formik"
import styles from "./styles.module.scss"

export function SelectField({ name, placeholder, label, value, onChange, children, additionalClasses = "" }) {
   return (
      <>
         <label>{label}</label>
         <Field
            component="select"
            name={name}
            placeholder={placeholder}
            size="1"
            className={[styles.SelectField, additionalClasses].join(" ")}
            type="text"
         >
            {children}
         </Field>
      </>
   )
}
