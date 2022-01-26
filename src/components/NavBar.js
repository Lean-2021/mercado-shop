import 'bootstrap/dist/css/bootstrap.min.css'; //importar estilos de bootstrap
import 'bootstrap';  //importar javascript de bootstrap
import '../assets/css/NavBar.css'; // importar archivo de estilos de navbar
import logo from '../assets/image/menu.png';  // importar logo de la web desde assets imagenes

const NavBar =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand nav-title" href="#"><img src={logo} width="35"alt="logo web"className="me-3"/>Mercado Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Novedades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ofertas</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                            </a>
                            <ul className="dropdown-menu menu-categorias mt-2"aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Conectividad</a></li>
                                <li><a className="dropdown-item" href="#">Desktop</a></li>           
                                <li><a className="dropdown-item" href="#">Impresoras</a></li>
                                <li><a className="dropdown-item" href="#">Monitores</a></li>
                                <li><a className="dropdown-item" href="#">Notebook</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                            </a>
                            <ul className="dropdown-menu menu-marcas mt-2"aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Brother</a></li>
                                <li><a className="dropdown-item" href="#">Dell</a></li>           
                                <li><a className="dropdown-item" href="#">Epson</a></li>
                                <li><a className="dropdown-item" href="#">HP</a></li>
                                <li><a className="dropdown-item" href="#">Lenovo</a></li>
                                <li><a className="dropdown-item" href="#">Mikrotik</a></li>
                                <li><a className="dropdown-item" href="#">Samsung</a></li>
                                <li><a className="dropdown-item" href="#">Tp-Link</a></li>
                                <li><a className="dropdown-item" href="#">Ubiquiti</a></li>

                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success me-4">Ingresar</button>
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"title="Buscar Productos" />
                        <button className="btn btn-primary" type="button">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;