import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TechCardEdit } from "../../forms/TechCard";
import { TechContext } from "../../../providers/TechContext";
import styles from "../EditTechModal/style.module.scss";
import { TechCardEdit } from "../../forms/TechCardEdit";

export const EditTechModal = ({ setIsOpenEdit }) => {
  const { register, handleSubmit, setValue } = useForm();
  const { editingTech, editTech } = useContext(TechContext);

  useEffect(() => {
    setValue("title", editingTech.title);
    setValue("status", editingTech.status);
  }, [editingTech, setValue]);

  const submit = (formData) => {
    editTech(formData);
    setIsOpenEdit(false);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <div className={styles.headerEditModal}>
          <button className={styles.btn} onClick={() => setIsOpenEdit(false)}>
            X
          </button>
        </div>
        <TechCardEdit setIsOpenEdit={setIsOpenEdit} />
      </div>
    </div>
  );
};
