import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

import Input from "../input";
import { loginFormSchema } from "./loginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "../LoginForm/style.module.scss"
import { InputPassword } from "../inputPassword";
import { UserContext } from "../../../providers/UserContext";


export const LoginForm =  () => {
    const{
        register,
        handleSubmit,
        formState: { errors },
        
    } = useForm({
        resolver: zodResolver(loginFormSchema),
    });
    
    const {loginSubmit} = useContext(UserContext);
    const [loading, setLoading ] = useState(false);
    
    const [user, setUser] = useState();


    const userLogin =  (payload) => {
       loginSubmit(payload)
    };

    const submit = (payload) =>{
        loginSubmit(payload)
    };
    return(
        <>
        <form onSubmit={handleSubmit(submit)}  className={style.formLoginBox}>
            <h1 className="title1">Login</h1>
            <Input 
            label="E-mail"
            type="email"
            id="email"
            placeholder="Digite seu email"
            error={errors.email}
            {...register("email")}
            />

             <InputPassword
             label="Senha"
             type="password"
             id="password"
             placeholder="Digite sua senha"
             error={errors.password}
             {...register("password")}
             />
             
            <button type="submit"  disabled={loading}
            onClick={handleSubmit(submit)}
             className="primario">Entrar</button>
             
            <div>
                <Link className="link" to="/register" >
                    <p>Ainda não possui uma conta?</p>
                <button className="desabilitado" type="submit" >Cadastre-se</button>
                </Link>
            </div>
        </form>
             </>
    )
}