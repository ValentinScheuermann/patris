import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (

    <div className="navbar bg-[#2A6C3D] h-20">
    <div className="navbar">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a href='/'>
      <img className="btn btn-ghost text-l" src={logo}/>
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><a href='/' >Inicio</a></li>
        <li><a href='/Aboutus' >Acerca del Colegio</a></li>
        <li>
          <details>
            <summary>Actividades</summary>
            <ul className="p-2">
              <li><a>Deportes</a></li>
              <li><a>Arte</a></li>
              <li><a>Campamentos</a></li>
              <li><a>Eventos</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Niveles Educativos</summary>
            <ul className="p-2">
              <li><a>Nivel Inicial - Jardin Maternal</a></li>
              <li><a>Nivel Inicial - Jardin de Infantes</a></li>
              <li><a>Nivel Primario</a></li>
              <li><a>Nivel Secundario</a></li>
              <li><a>Orientación y Psicopedagogía</a></li>
              <li><a>Biblioteca</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Comunidad</summary>
            <ul className="p-2">
              <li><a>TECHO - Construcciones</a></li>
              <li><a>Acciones Solidarias</a></li>
              <li><a>OMA</a></li>
            </ul>
          </details>
        </li>
        <li><a>Novedades</a></li>
      </ul>
    </div>
   
  </div>
  )
}

export default Navbar;
