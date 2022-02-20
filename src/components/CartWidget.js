import style from '../assets/css/CartWidget.module.css';
import Badge from '@mui/material/Badge'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShopify} from '@fortawesome/free-brands-svg-icons';

const CartWidget =()=>{
    return(
        <div>
            <Badge badgeContent={4} color="error"className='mt-1 ms-4 me-4'>
                <FontAwesomeIcon icon={faShopify} className={style.cartShop}/>      
            </Badge>
        </div>
    );
}
export default CartWidget;