// import { createContext, useContext, useState } from "react";
// import api from "../../services/index";
// import { UserContext } from "../UserContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const TechContext = createContext({});

// export const TechProvider = ({ children }) => {
//   const [techList, setTechList] = useState([]);
//   const [editingTech, setEditingTech] = useState(null);
//   const { token } = useContext(UserContext);

//   const createNewTech = async (formData) => {
//     try {
//       const { data } = await api.post("/users/techs", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       // Atualiza a lista de tecnologias no estado
//       setTechList([...techList, data]);
//       toast.success("Tecnologia cadastrada com sucesso!");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteTech = async (tech_id) => {
//     try {
//       await api.delete(`/users/techs/${tech_id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const newTechList = techList.filter((tech) => tech.id !== tech_id);
//       setTechList(newTechList);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   const editTech = async (formData) => {
//     try {
//       const { data } = await api.put(
//         `/users/techs/${editingTech.id}`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setTechList((prevState) => {
//         const updatedTechList = prevState.map((tech) =>
//           tech.id === data.id ? data : tech
//         );
//         return updatedTechList;
//       }, () => {
        
//         user.techs = techList;
//       });

//       setEditingTech(null);
//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   };

  
//   return (
//     <TechContext.Provider
//       value={{
//         techList,
//         createNewTech,
//         deleteTech,
//         editTech,
//         editingTech,
//         setEditingTech,
//       }}
//     >
//       {children}
//       <ToastContainer />
//     </TechContext.Provider>
//   );
// };
import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/index";
import { UserContext } from "../UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [editingTech, setEditingTech] = useState(null);
  const { token } = useContext(UserContext);

  useEffect(() => {
    // Carregar a lista de tecnologias ao iniciar o componente
    loadTechs();
  }, []);

  const loadTechs = async () => {
    try {
      const { data } = await api.get("/users/techs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewTech = async (formData) => {
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia cadastrada com sucesso!");
      // Recarregar a lista de tecnologias após a criação de uma nova tecnologia
      loadTechs();
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
      setTechList((prevState) => {
        const updatedTechList = prevState.map((tech) =>
          tech.id === data.id ? data : tech
        );
        return updatedTechList;
      }, () => {
        
        user.techs = techList;
      });

      setEditingTech(null);
      return data;
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
