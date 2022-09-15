import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

import LogoPerfil from "../icons/logo-perfil.svg"
import cerrarSesion from "../icons/logo-cerrar.svg"



function HeaderInicio() {

    const [infoAdmin, setInfoAdmin] = useState([]);
    const [active, setActive] = useState(false);
    const navigate = useNavigate()
    const usuario = localStorage.getItem('usuario')
    const parseado = JSON.parse(usuario)

    useEffect(() => {
        const getAdmin = async () => {
            try {
                const resInfoAdmin = await axios.get(`http://localhost:8000/admin/profile/${usuario.id}`);
                setInfoAdmin(resInfoAdmin.data);
                console.log(usuario);
                console.log(parseado)
            } catch (error) {
                console.log(error);
            }
        };
        getAdmin();
    }, []);




        const getLogout = async () => {
            try {
                const resLogout = await axios.get(`http://localhost:8000/logout`,{withCredentials: true});
                setInfoAdmin(resLogout.data);
                console.log(resLogout.data);
                navigate('/login')
            } catch (error) {
                console.log(error);
            }
        };




    return (
        <div className='header-inicio'>

            <div className='header-inicio'>

                <p className='Title-inicio'>Bienvenido {parseado.name}</p>

                <img className="usuario-inicio" src={require(`../../../img-back/admins/${parseado.avatar}`)} onClick={() => setActive(!active)} alt={parseado.name} />

            </div>

            <div className={`sesion ${active ? 'mostrar-sesion' : 'ocultar-sesion'}`}>
                <Link to="/profile"><img  className="logo-perfil" src={LogoPerfil}/> Mi perfil</Link>


                <Link to="/"><img className="logo-perfil" src={cerrarSesion}/><button onClick={()=>{getLogout()}}>Cerrar sesión</button></Link>
                

            </div>

        </div>

    )

}

export default HeaderInicio;