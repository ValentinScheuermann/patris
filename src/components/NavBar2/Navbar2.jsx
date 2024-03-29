import React from 'react';

const Navbar2 = () => {
  return (
    <div className="navbar bg-[#2AA556] h-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl font-bold font-montserrat text-[#FFFFFF]">Inscripciones 2025 abiertas !</a>
      </div>
      <div className="navbar-center hidden lg:flex">
      </div>
      <div className="navbar-end">
        <a className="btn">Aplicar</a>
      </div>
    </div>
  );
};

export default Navbar2;