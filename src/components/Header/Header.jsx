import styles from "./styles.module.scss"
import Image from "next/image"
import logo from "../../../public/images/logo.png"

export function Header(props) {
   return (
      <>
         <div className={styles.HeaderBox}>
            <div>
         <Image width="52" height="52" src={logo}></Image>
               <h1> {props.title} </h1>
            </div>
         </div>
      </>
   )
}
