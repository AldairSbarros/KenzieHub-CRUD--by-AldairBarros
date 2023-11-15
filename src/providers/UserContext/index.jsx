import { useNavigate } from 'react-router-dom';
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast,  } from 'react-toastify';
import"react-toastify/dist/ReactToastify.css"
import api from '../../services';


export const UserContext =createContext({})

export const UserProvider = ({children}) => {  

    const [token, setToken] = useState(null);
    const [techList, setTechList] = useState([]);

    useEffect(() => {
        const bearerToken = localStorage.getItem("@TOKEN")
        if(bearerToken) {
            setToken(bearerToken);
        }
    }, [])

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);


    const loginSubmit = async (payload) => {
        try {
            const {data} = await api.post("/sessions", payload);
           console.log(data);
            setToken(data.token);
            localStorage.setItem("@TOKEN", data.token);
            setUser(data.user);
            setTechList(data.user.techs)
            
            localStorage.setItem("@USER", JSON.stringify(data.user));
            
            navigate("/user");{
            toast.success("Login realizado com sucesso");
            setTimeout(() => {}, 2000);}
        } catch  (error){
            console.log(error);
            if(error.response?.data === "Incorrect password") {
            toast.error("Dados inválidos");
            setTimeout(() => {}, 2000);
            }
        } finally {
            setLoading(true);
        }
    }

    const registerUser = async (payload) =>{

        try {
            setLoading(true);
            await api.post("/users", payload);
            navigate("/");
            toast.success("Cadastro realizado com sucesso !");
            setTimeout(() => {}, 2000);
          } catch (error) {
            console.log(error);
            if (error.response?.data === "Email already exists") {
              toast.error("Usuário já cadastrado!");
              setTimeout(() => {}, 2000);
            }
          } finally {
            setLoading(false);
          }
    }



    return(
        <UserContext.Provider value={{loginSubmit, registerUser, user, token, techList, setTechList}}>
            {children}
            <ToastContainer/>
        </UserContext.Provider>
    )

}
