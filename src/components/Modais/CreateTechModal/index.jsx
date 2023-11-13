import { useForm } from "react-hook-form";

import { TechCard } from "../../forms/TechCard";
import styles from "../CreateTechModal/style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const CreateTechModal = ({ children, setIsOpen }) => {
  const { register, handleSubmit } = useForm();
  const { createNewTech } = useContext(TechContext);
  const submit = (data) => {
    createNewTech(data);
    setIsOpen(false);
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <div className={styles.headerModalBox}>
          <button className={styles.btn} onClick={() => setIsOpen(false)}>
            X
          </button>
        </div>

        <TechCard setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
