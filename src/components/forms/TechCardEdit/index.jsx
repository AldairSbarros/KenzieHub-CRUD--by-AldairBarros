import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/forms/input";
import { TechContext } from "../../../providers/TechContext";
import styles from "../TechCard/styles.module.scss";

export const TechCardEdit = () => {
  const { register, handleSubmit, setIsOpenEdit } = useForm();

  const { editTech } = useContext(TechContext);
  const [editingTech, setEditingTech] = useState({ title: "", status: "" });

  const submit = (data) => {
    editTech(data);
  };
  return (
    <div className={styles.container1}>
      <form onSubmit={handleSubmit(submit)}>
        <h1 className={styles.headerCard1}>Tecnologia Detalhes</h1>

        <Input
          type="text"
          placeholder="Digite a tecnologia"
          name="title"
          className=""
          {...register("title", { required: true })}
        />
        <label>Selcionar status</label>
        <select
          type="text"
          className={styles.statusTech1}
          name="status"
          {...register("status", { required: true })}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit" className="primario">
          Salvar alterações
        </button>
      </form>
    </div>
  );
};
