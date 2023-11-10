import { useContext, useState } from "react";
import { registerFormSchema } from "./registerForm.schema"
import Input from "../input";
import"react-toastify/dist/ReactToastify.css"
import { ToastContainer,  } from "react-toastify";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "../RegisterForm/style.module.scss"
import { InputPassword } from "../inputPassword";
import { UserContext } from "../../../providers/UserContext";


export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const { registerUser } = useContext(UserContext);
    const [ loading, setLoading ] = useState(false);
    const [ isHidden, setIsHidden ] = useState(true);


    const userRegister = (payload) => {
        registerUser(payload)
        
        
    };

    const submit = async (payload) => {
       await userRegister(payload);
    };

    return(
        <form className={style.registerBox} onSubmit={handleSubmit(submit)}>
            <h1 className="title1">Crie sua conta</h1>
                    <p>Rápido e grátis, vamos nessa</p>
            < Input 
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
            error={errors.name}
            {...register("name")}
            disabled={loading}
            />

             < Input 
            label="Seu e-mail"
            type="text"
            placeholder="Digite aqui seu e-mail"
            error={errors.email}
            {...register("email")}
            disabled={loading}
            />
                        
             < InputPassword className={style.inputPassord}
            label="Crie uma senha"
            type={isHidden ? "password" : "text"}
            placeholder="Digite aqui sua nova senha!"
            error={errors.password}
            {...register("password") }
            disabled={loading}
            />
                       
             < InputPassword 
            label="Confirme sua senha !"
            type="password"
            placeholder="Confirme a senha digitada !"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
            disabled={loading}
            />

             < Input 
            label="Bio"
            type="text"
            placeholder="Fale sobre você"
            disabled={loading}
            required
            {...register("bio")}
            />
             < Input 
             label="Contato"
             type="text"
             placeholder="Opção de contato"
             disabled={loading}
             {...register("contact")}
             required
            />
            <label>Selecionar módulo</label>
            <select {...register("course_module")} required>
                <option selected value="Primeiro Módulo (Introdução ao Frontend)">Primeiro Módulo (Introdução ao Frontend)</option>
                <option value="Segundo Módulo (Frontend Avançado)">Segundo Módulo (Frontend Avançado)</option>
                <option value="Terceiro Módulo (Introdução ao Backend)">Terceiro Módulo (Introdução ao Backend)</option>
                <option value="Quarto Módulo (Backend Avançado)">Quarto Módulo (Backend Avançado)</option>
                
            </select>
            <ToastContainer />
            <button type="submit" className="primario-negativo" 
            // disabled={isValid || !isDirty}
            >
                {loading ? "Cadastrando..." : "Cadastrar"}
                
            </button>
        </form>
    )
}