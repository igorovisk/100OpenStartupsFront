import styles from "./styles.module.scss"

export function Table({ children, additionalClasses }) {
   return <table className={[styles.Table, additionalClasses].join(" ")}>{children}</table>
}
