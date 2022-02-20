import {Modal,Box,Button} from '@mui/material';
import logo from '../assets/image/menu.png';  // importar logo de la web desde assets imagenes
import '../assets/css/ModalMessage.css';


const ModalMessage=(props)=>{
    const ocultar=()=>{
        props.onAdd()
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#343434',
        border: '2px solid #000',
        boxShadow: 24,
        color:'white',
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
                        <p className='modal-description'>{props.text}</p>
                    <Button variant="text" color="warning"className="mt-3 ms-4"onClick={ocultar}>Cerrar</Button>
                </Box>
            </Modal>
        </div>
    )
}
export default ModalMessage;