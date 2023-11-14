import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";
import styles from "../EditTechModal/style.module.scss";
import { TechCardEdit } from "../../forms/TechCardEdit";

export const EditTechModal = ({ children, isOpenEdit, setIsOpenEdit }) => {
  const { register, handleSubmit, setValue } = useForm();
  const { editingTech, editTech } = useContext(TechContext);

  // useEffect(() => {
  //   setValue("title", editingTech.title);
  //   setValue("status", editingTech.status);
  //   console.log(editingTech);
  // }, [editingTech, setValue]);

  const submit = (formData) => {
    editTech(formData);
    setIsOpenEdit(true);
  };
  // if (isOpenEdit) {
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
}
// return null;
// };
