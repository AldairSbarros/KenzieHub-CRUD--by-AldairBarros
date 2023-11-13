import { createContext, useEffect, useState } from "react";
import api from "../../services/index";


export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const [ techList, setTechList] = useState([]);
    const [ editingTech ,setEditingTech] = useState(null);

    useEffect(() => {
        const getTechs = async () => {
            try {
                const { data } = await api.get("/sessions");
                setTechList(data);

                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getTechs();;
    },[]);

    const createNewTech = async (formData) => {
        try {
            const {data} = await api.post("/users/techs", formData);
            setTechList([...techList, data]);
            // console.log(techList);
            alert("Tecnologia cadastrada com sucesso!");
        } catch (error) {
            console.log(error);
        
            
        }
    };

    const deleteTech = async (deletingId) => {
        try {
            await api.delete(`/users/techs/${deletingId}`);
            const newTechList = techList.filter(tech => tech.id !== deletingId);
            setTechList(newTechList);
        } catch (error) {
            console.log(error);
            
        }
    };

    const editTech = async (formData) => {
        try {
            const {data} = await api.patch(`/users/techs/${editingTech.id}`, formData);
            const newTechList = techList.map((tech) => {
                if( tech.id ===editingTech.id) {
                    return data;
                }else {
                    return tech;
                }
            });
            setTechList(newTechList);
            setEditingTech(null);
        } catch (error) {
            console.log(error);
            
        }
    };
    return(
        <TechContext.Provider 
        value={{
            techList,
            createNewTech,
            deleteTech,
            editTech,
            editingTech,
            setEditingTech,
        }}
        >
            {children}
        </TechContext.Provider>
    );
};