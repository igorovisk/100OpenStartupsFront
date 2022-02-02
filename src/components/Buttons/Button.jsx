import styles from "./styles.module.scss"

export function Button({ label, additionalClasses, handleClick }) {
   return (
      <button type="submit" className={[styles.Button, additionalClasses].join(" ")} onClick={handleClick}>
         {label}
      </button>
   )
}
