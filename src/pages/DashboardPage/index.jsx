import logo from "../../assets/Logo.svg"
import style from "../../pages/DashboardPage/style.module.scss"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext, useEffect, useState } from 'react';
import { TechCard } from "../../components/forms/TechCard";
import { TechList } from "../../components/forms/TechList";
import {FaPlusSquare} from "react-icons/fa";
import { CreateTechModal } from "../../components/Modais/CreateTechModal";
import { TechContext } from "../../providers/TechContext";



export const DashboardPage = ( {userLogout}) => {
    const [userName, setUserName] = useState('');
    const [course, setCourse] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const { editingTech} = useContext(TechContext);

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
                    <h1 className="title1">Tecnologias</h1>
                    <FaPlusSquare size={30} style={{ color: 'white', marginRight: '-650px' }} onClick={() => setIsOpen(true)}/>
                    {isOpen ? <CreateTechModal setIsOpen={setIsOpen} /> : null}

                    {/* <TechCard/> */}
                    <TechList/>
                   
                </div>


            </div>
        </>
    )}
