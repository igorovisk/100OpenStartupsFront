import styles from "./styles.module.scss"

export function ButtonWrapper({ children, additionalClasses = "" }) {
   return <div className={[styles.ButtonWrapper, additionalClasses].join(" ")}>{children}</div>
}
