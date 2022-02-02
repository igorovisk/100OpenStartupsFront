import styles from "./styles.module.scss"
import Link from "next/link"

export function RedirectButton({ label, additionalClasses, handleclick, href }) {
   return (
      <Link href={href} passHref>
         <button type="submit" className={[styles.Button, additionalClasses].join(" ")}>
            {label}
         </button>
      </Link>
   )
}
