import styles from "./styles.module.scss"

export function ModalContentWrapper({ children, additionalClasses = "" }) {
   return <div className={[styles.ModalContentWrapper, additionalClasses].join(" ")}>{children}</div>
}
