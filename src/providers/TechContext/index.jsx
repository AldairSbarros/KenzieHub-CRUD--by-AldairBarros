import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/index";
import { UserContext } from "../UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [editingTech, setEditingTech] = useState(null);
  const { token } = useContext(UserContext);

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
    getTechs();
  }, []);

  const createNewTech = async (formData) => {
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechList([...techList, data]);
      console.log(data);
      toast.sucess("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (deletingId) => {
    try {
      await api.delete(`/users/techs/${deletingId}`),
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      const newTechList = techList.filter((tech) => tech.id !== deletingId);
      setTechList(newTechList);
    } catch (error) {
      console.log(error);
    }
  };

  const editTech = async (formData) => {
    try {
      const { data } = await api.patch(
        `/users/techs/${editingTech.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newTechList = techList.map((tech) => {
        if (tech.id === editingTech.id) {
          return data;
        } else {
          return tech;
        }
      });
      setTechList(newTechList);
      setEditingTech(null);
    } catch (error) {
      console.log(error);
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
