

import { useContext } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/forms/input";
import { TechContext } from "../../../providers/TechContext";
import styles from "../TechCard/styles.module.scss";

export const TechCard = ({ setIsOpen }) => {
  const { register, handleSubmit } = useForm();
  const { createNewTech } = useContext(TechContext);

  const submit = async (data) => {
    await createNewTech(data);
    setIsOpen(false); // Fecha o modal após a tecnologia ser cadastrada
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(submit)}>
        <h1 className={styles.headerCard}>Cadastrar Tecnologias</h1>

        <Input
          type="text"
          placeholder="Digite a tecnologia"
          name="title"
          className=""
          {...register("title", { required: true })}
        />
        <label>Selecionar status</label>
        <select
          type="text"
          className={styles.statusTech}
          name="status"
          {...register("status", { required: true })}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit" className="primario">
          Cadastrar Tecnologia
        </button>
      </form>
    </div>
  );
};
