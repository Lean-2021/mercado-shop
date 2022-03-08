import {Modal,Box} from '@mui/material';
import logo from '../assets/image/menu.png';  // importar logo de la web desde assets imagenes
import '../assets/css/ModalMessage.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { ModalList } from './ModalList';
import { Button } from '@mui/material';



const ModalMessage=(props)=>{
    const text = useContext(CartContext);
    const hoy=new Date(); //obtener fecha

    const cerrar=()=>{
        props.close()
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        height:550,
        bgcolor: '#343434',
        border: '2px solid #000',
        boxShadow: 24,
        color:'white',
        overflow:'auto',
        p: 4,
    };
    return(
        <div>
            <Modal
                open={props.mostrar}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                     <p className="modal-nombre text-center"><span className="text-center me-3"><img src={logo}alt="logo"width="25"/></span>Mercado - Shop</p>
                    <p className='modal-description pt-3'>GRACIAS POR SU COMPRA</p>
                    <div className='text-center'>
                        <p className='titles'>Orden de Compra</p>
                        <p className='pt-2'>{props.text}</p>
                        <p className='pt-1'>{hoy.toString()}</p>
                        <p className='titles'>Comprador</p>
                        <p className='pt-1'>Name: {text.dateOrder.buyer.name.charAt(0).toUpperCase() + text.dateOrder.buyer.name.slice(1)}</p>
                        <p className='pt-1'>Email: {text.dateOrder.buyer.email}</p>
                        <p className='pt-1'>Phone: {text.dateOrder.buyer.phone}</p>
                        <p className='titles'>Detalle</p>
                        <div className='list-detail'>
                            {
                                text.dateOrder.items.map(product =>
                                    <ModalList
                                        key={product.id}
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        qty={product.qty}
                                    />
                                )
                            }
                        </div>
                        <p className='titles'>Total</p>
                        <p className='detail-total pb-2'>$  {text.dateOrder.total}</p>
                        <Button variant='contained'color='error'size='large'onClick={cerrar}>Cerrar</Button>
                    </div>   
                </Box>
            </Modal>
        </div>
    )
}
export default ModalMessage;