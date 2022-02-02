
import styles from "./styles.module.scss"

export function Header(props) {

   return (
      <div className={styles.HeaderBox}>
         <div>         
            <h1> {props.title} </h1>
         </div>
      </div>
   )
}
