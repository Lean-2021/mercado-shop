import style from '../assets/css/CartWidget.module.css';
import Badge from '@mui/material/Badge'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShopify} from '@fortawesome/free-brands-svg-icons';
import { useContext} from 'react';
import { CartContext } from './CartContext';
import { UserContext } from './UserContext';

const CartWidget =()=>{
    const datos = useContext(CartContext); //traer datos de cantidad agregadas
    const user = useContext(UserContext);
       return(
        <div>
            {
                user.activeLogin?
                    <Badge badgeContent={datos.sumarCant} color="error"className='mt-1 ms-4 me-4'>
                        <FontAwesomeIcon icon={faShopify} className={style.cartShop}/>      
                    </Badge>
                :(
                    <span className='mt-1 ms-4 me-4'><FontAwesomeIcon icon={faShopify} className={style.cartLogout}/></span>
                )
            }
        </div>
    );
}
export default CartWidget;