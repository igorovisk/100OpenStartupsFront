import Modal from "react-modal"
import { ModalContentWrapper } from "../Wrappers/ModalContentWrapper"
import { ButtonWrapper } from "../Wrappers/ButtonWrapper"
import { Button } from "../Buttons/Button"
import styles from "./styles.module.scss"

export function DeleteModal({ closeModal, handleClick, isOpen, additionalClasses = "" }) {
   return (
      <Modal className={[styles.DeleteModal, additionalClasses].join(" ")} isOpen={isOpen}>
         <ModalContentWrapper>
            <h1>ATENÇÃO</h1>
            <h2>Você quer mesmo inativar essa startup?</h2>
            <ButtonWrapper>
               <Button handleClick={closeModal} label="Cancelar" />
               <Button handleClick={handleClick} label="Sim, quero inativar" />
            </ButtonWrapper>
         </ModalContentWrapper>
      </Modal>
   )
}
