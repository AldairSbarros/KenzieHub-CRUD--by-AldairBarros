import { useContext } from "react"


export const TechList = () => {
    const { techList, setTechList , deleteTech, setEditingTech} = useContext(TechContext);

    return(

        <ul>
            {techList.map((tech) => (

            <li>
                <h2>{tech.title}</h2>
                <p>{tech.status}</p>
                <button onClick={() => deleteTech(tech.id)}>Editar</button>
                <button onClick={() => setEditingTech(tech)}>Excluir</button>
            </li>
            ))}   
            </ul>
    );    
};
