import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark  navBarPrincipal">
    <div class="container-fluid">
      <Link className="navbar-brand" to={"/"}><img className="imagenLogo" src="../../images/image-removebg-preview (1).png" alt="" /></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">HARDWARE CODE</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos"><img src="../../images/iconos/computer.png" /> TODOS</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Pc-armadas"><img src="../../images/iconos/case.png" /> ARMADAS</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Procesadores"><img src="../../images/iconos/processor.png" /> PROCESADORES</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Motherboards"><img src="../../images/iconos/motherboard.png" /> MOTHERBOARDS</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Placas-de-Video"><img src="../../images/iconos/graphic-card.png" /> GRAFICAS</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Memorias-RAM"><img src="../../images/iconos/ram.png" /> RAM</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Discos-Solidos"><img src="../../images/iconos/ssd-drive.png" /> DISCOS SOLIDOS</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Discos-Rigidos"><img src="../../images/iconos/hdd.png" /> DISCOS RIGIDOS</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Periféricos"><img src="../../images/iconos/mouse.png" /> PERIFÉRICOS</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Monitores"><img src="../../images/iconos/monitor.png" /> MONITORES</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Notebooks-gamers"><img src="../../images/iconos/online-game.png" /> NOT. GAMERS</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Notebooks-no-gamers"><img src="../../images/iconos/laptop.png" /> NOTEBOOKS</Link>
                          </li>
                          <li className="dropdown-item">
                              <Link className="nav-link link imagenDropdown " to="/productos/Sillas-Gamer"><img src="../../images/iconos/gaming-chair.png" /> SILLAS</Link>
                          </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <CartWidget/>
  </nav>
  )
}

export default Navbar

/*  */