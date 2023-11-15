import { createContext, useContext, useState } from "react";
import api from "../../services/index";
import { UserContext } from "../UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [editingTech, setEditingTech] = useState(null);
  const { token, user, techList, setTechList  } = useContext(UserContext);
  

  const createNewTech = async (formData) => {
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const newTechList = [...techList, data]
      console.log(data);
      setTechList(newTechList);
      toast.success("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (tech_id) => {
    try {
      await api.delete(`/users/techs/${tech_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechList = techList.filter((tech) => tech.id !== tech_id);
      setTechList(newTechList);
    } catch (error) {
      console.log(error);
    }
  };
  
  const editTech = async (formData) => {
    console.log(user);
    try {
      const { data } = await api.put(
        `/users/techs/${editingTech.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      const newTechList = techList.map((tech) => tech.id === data.id ? data : tech);
      console.log(newTechList);
      setTechList(newTechList);
      setEditingTech(null);
      
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
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
      <ToastContainer />
    </TechContext.Provider>
  );
};