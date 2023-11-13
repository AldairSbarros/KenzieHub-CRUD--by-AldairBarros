import { useState } from 'react';
import { useContext } from "react";
import { useForm } from "react-hook-form"
import Input from "../../../components/forms/input";
import { TechContext } from "../../../providers/TechContext";
import styles from "../TechCard/styles.module.scss"




export const TechCard = () => {
    const { register, handleSubmit, setIsOpen } = useForm();

    const {createNewTech} = useContext(TechContext);
    const [ newTech, setNewTech] = useState({ title: "", status: ""});
    
    
    const submit = (data) => {
        createNewTech(data);
    }
    return(
        <div className={styles.container}>

        <form onSubmit={handleSubmit(submit)}>
        <h1 className={styles.headerCard}>Cadastrar Tecnologias</h1>
            
            <Input
            type="text"
            placeholder="Digite a tecnologia"
            name="title"
            className=""
            // value={newTech.title}
            // onChange={e => setNewTech({...newTech, title: e.target.value})}
            {...register("title", {required: true})}
            />
            <label>Selcionar status</label>
            <select
            type="text"
            // value={newTech.status}
            // onChange={e => setNewTech({ ...newTech, status: e.target.value })}
            className={styles.statusTech}
            name="status"
            {...register("status", {required: true})}
            >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <button type="submit" className="primario">Cadastrar Tecnologia</button>
            
        </form>

                </div>
    )
}