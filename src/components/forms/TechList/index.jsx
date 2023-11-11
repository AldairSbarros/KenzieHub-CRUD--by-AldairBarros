import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext";
import { TechContext } from "../../../providers/TechContext";


export const TechList = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    const { deleteTech, setEditingTech} = useContext(TechContext);
    return(

        <ul>
            {user.techs.map((tech) => (

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
