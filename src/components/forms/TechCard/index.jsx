import { useContext } from "react";
import { useForm } from "react-hook-form"
import Input from "../../components/forms/input";
import MdClose from "react-icons/md";

export const TechCard = () => {
    const { register, handleSubmit } = useForm();

    const {createNewTech} = useContext(TechContext);
    
    const submit = (data) => {
        createNewTech(data);
    }
    return(

        <form onSubmit={handleSubmit(submit)}>
            <div>
            <h1>Cadastrar Tecnologia</h1>
            <MdClose />

            </div>
            <Input
            type="text"
            placeholder="Digite a tecnologia"
            name="title"
            className=""
            {...register("title")}
            />
            <label>Selcionar status</label>
            <select
            {...register("status")}
            className="status"
            name="status">
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <button type="submit" className="primario">Cadastrar Tecnologia</button>
            
        </form>

    )
}