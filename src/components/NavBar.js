import 'bootstrap/dist/css/bootstrap.min.css'; //importar estilos de bootstrap
import 'bootstrap';  //importar javascript de bootstrap
import '../assets/css/NavBar.css'; // importar archivo de estilos de navbar
import logo from '../assets/image/menu.png';  // importar logo de la web desde assets imagenes
import CartWidget from './CartWidget';
import SearchIcon from '@mui/icons-material/Search';
import {Link,NavLink} from 'react-router-dom';
import {useContext,useEffect,useState} from 'react';
import { SearchContext } from './SearchContext';
import {Snack} from './Snack';
import {UserContext} from './UserContext';
import { CartContext } from './CartContext';

const NavBar =()=>{
    const datosCart = useContext(CartContext);
    const busqueda = useContext(SearchContext);
    const [buscar,setBuscar]=useState('');
    const [snack,setSnack]= useState(false);  //activar/desactivar mensaje de error en busqueda
    const [buttonLink,setButtonLink] = useState();  // estado activar o no link de busqueda
    const dato =useContext(UserContext);  //contexto datos de usuario
    let result = new URLSearchParams({'data':buscar}) //pasar dato de busqueda por URL
    let dataSearch = result.get('data') //obtener dato 
        
    useEffect(()=>{
            setButtonLink(buttonLink)  
        },[buttonLink])

        const logOut=()=>{    
            dato.setActiveLogin(false);
            datosCart.clearCart();
       }
        const cambio=()=>{   // cambio boton search nav
            setButtonLink(true)
        }  
    
        const ocultar =()=>{  //ocultar SnackBar
            setSnack(false);
        }    
        
        const buscarProducto =()=>{  //buscar productos input search 
            if(buscar.trim()!==''){
                setButtonLink(true);
                busqueda.setBuscar(buscar.toLowerCase());
                setBuscar('')
                setButtonLink(false); // una vez realizada la busqueda volder a false el boton de busqueda
            }
            else{
                setButtonLink(false);
                setSnack(true);    
                setBuscar('');
            }
        }
        
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
                        {
                            dato.activeLogin ? <p className='mt-3'><span className='me-3'><b>{dato.userActive.name.toUpperCase()}</b></span><span><button className="btn btn-primary me-4"onClick={logOut}>Salir</button></span></p>
                            :( 
                                <Link to='/login'><p className='mt-3'><button className="btn btn-outline-success me-4">Ingresar</button></p></Link>
                                
                            )
                        }
                    <form className="d-flex">
                        <input 
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar..."
                            aria-label="Search"
                            title="Buscar Productos"
                            value={buscar}
                            onChange={(event)=>setBuscar(event.target.value)}
                            onKeyPress={cambio}
                        /> 
                        {
                            buttonLink ? <Link to={'/search/'+dataSearch}><button className="btn btn-primary"type="button" onClick={buscarProducto}><SearchIcon /></button></Link>:(
                                <button className="btn btn-danger"type="button"onClick={buscarProducto}><SearchIcon /></button>
                            )
                        }
                        {
                            snack && <Snack mostrar={snack}time={2000}ocultar={ocultar}text={`No se ingresaron datos`}color={'error'}/>
                        }
                        <Link to='/cart'><CartWidget/></Link>
                    </form>
                </div> 
            </div>
        </nav>
    );
}
export default NavBar;