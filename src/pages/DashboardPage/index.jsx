import logo from "../../assets/Logo.svg"
import style from "../../pages/DashboardPage/style.module.scss"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from 'react';



export const DashboardPage = ( {userLogout}) => {
    const [userName, setUserName] = useState('');
    const [course, setCourse] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("@USER"));
        if (storedUser && storedUser.name) {
            setUserName(storedUser.name);
        }
    }, []);

    useEffect(() => {
        const storedCourse = JSON.parse(localStorage.getItem("@USER"));
        if (storedCourse && storedCourse.course_module) {
            setCourse(storedCourse.course_module);
        }
            
    }, []);
    const logout = () => {
        localStorage.clear();
        toast.success("Logout realizado com sucesso!",{ className: 'custom-toast', style:{ backgroundColor: "white"}});
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    }

    return (
        <>
            <div className={style.DashContainer}>

                <div className={style.dashBox}>
                    <img src={logo} alt="" />
                    <button onClick={() => { logout() } } className="desabilitado small">Sair</button>
                    <ToastContainer />
                </div>
                
                <div className={style.userBox}>
                    <h1 className="title1">Olá, {userName}</h1>
                    <h4 > {course}</h4>
                </div>

                
                <div className={style.content}>
                    <h1 className="title1">Estamos em Desenvolvimento </h1>
                    <h1 className="title1">Desculpe os transtornos nosso site ainda está em Desenvolvimento. </h1>
                   
                </div>


            </div>
        </>
    )}
