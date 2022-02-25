import 'bootstrap/dist/css/bootstrap.min.css'; //importar estilos de bootstrap
import 'bootstrap';  //importar javascript de bootstrap
import '../assets/css/NavBar.css'; // importar archivo de estilos de navbar
import logo from '../assets/image/menu.png';  // importar logo de la web desde assets imagenes
import CartWidget from './CartWidget';
import SearchIcon from '@mui/icons-material/Search';
import {Link,NavLink} from 'react-router-dom';

const NavBar =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid">
                <Link to='/'className="navbar-brand nav-title"><img src={logo} width="35"alt="logo web"className="me-3 logoWeb"/>Mercado Shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/category/novedades'className="nav-link" aria-current="page">Novedades</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/ofertas'className="nav-link">Ofertas</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle"id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                            </span>
                            <ul className="dropdown-menu menu-categorias mt-2"aria-labelledby="navbarDropdown">
                                <li><NavLink to='/category/conectividad'className="dropdown-item">Conectividad</NavLink></li>
                                <li><NavLink to='/category/desktop'className="dropdown-item">Desktop</NavLink></li>           
                                <li><NavLink to='/category/impresoras' className="dropdown-item">Impresoras</NavLink></li>
                                <li><NavLink to='/category/monitores' className="dropdown-item">Monitores</NavLink></li>
                                <li><NavLink to='/category/notebook' className="dropdown-item">Notebook</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                            </span>
                            <ul className="dropdown-menu menu-marcas mt-2"aria-labelledby="navbarDropdown">
                                <li><NavLink to='/category/brother'className="dropdown-item">Brother</NavLink></li>
                                <li><NavLink to='/category/dell'className="dropdown-item">Dell</NavLink></li>           
                                <li><NavLink to='/category/epson'className="dropdown-item">Epson</NavLink></li>
                                <li><NavLink to="/category/hp"className="dropdown-item">HP</NavLink></li>
                                <li><NavLink to="/category/lenovo"className="dropdown-item">Lenovo</NavLink></li>
                                <li><NavLink to="/category/mercusys"className="dropdown-item">Mercusys</NavLink></li>
                                <li><NavLink to='/category/mikrotik'className="dropdown-item">Mikrotik</NavLink></li>
                                <li><NavLink to='/category/samsung'className="dropdown-item">Samsung</NavLink></li>
                                <li><NavLink to='/category/tp-Link'className="dropdown-item">Tp-Link</NavLink></li>
                                <li><NavLink to='/category/ubiquiti'className="dropdown-item">Ubiquiti</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success me-4">Ingresar</button>
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"title="Buscar Productos"/> 
                        <button className="btn btn-primary"type="button"><SearchIcon /></button>
                        <Link to='/cart'><CartWidget/></Link>
                    </form>
                </div> 
            </div>
        </nav>
    );
}
export default NavBar;