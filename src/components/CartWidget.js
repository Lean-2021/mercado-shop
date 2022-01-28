import logoCompra from '../assets/image/carrito.svg';
import '../assets/css/CartWidget.css';
const CartWidget =({cantidad})=>{
    return(
        <div>
            <img src={logoCompra}alt="carrito de compras" width="35"className="carrito ms-3 me-3"/><span className="carrito-cantidad"><p className="cantidad">{cantidad}</p></span>
        </div>
    );
}
export default CartWidget;