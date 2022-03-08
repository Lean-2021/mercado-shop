import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Footer.css';
import logo from '../assets/image/menu.png';  // importar logo de la web desde assets imagenes
import CopyrightIcon from '@mui/icons-material/Copyright';
import {NavLink,Link} from 'react-router-dom';
export const Footer =()=>{
    return(
        <footer className="container-fluid section-footer">
            <div className="row pt-5">
                <div className="col-md-12 text-center">
                    <Link to='/' className="footer-title-link"><p><span><img src={logo}alt="logo mercado"width="40"className="footer-title-img me-3"/></span><span className="footer-title">Mercado - Shop</span></p></Link>
                </div>
            </div>     
            <div className="row container-fluid">
                <div className="col-md-12 text-center">
                    <ul className="footer-nav pt-3">
                        <li className="nav-item"><NavLink to='/category/novedades'className="nav-link">Novedades</NavLink></li>
                        <li className="nav-item"><NavLink to='/category/ofertas' className="nav-link">Ofertas</NavLink></li>
                        <li className="nav-item"><Link to='/login' className="nav-link">Login</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-md-12 text-center">
                    <p><CopyrightIcon className="copyright"/><span className="footer-copyright ms-1">Leandro Wagner</span></p>
                </div>
            </div>
        </footer>
    )
}