import {Modal,Box,Typography,Button} from '@mui/material';
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
    console.log('estoyw aca');
    return(
        <div>
            <Modal
                open={props.mostrar}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <p className="modal-nombre"><span className="me-4"><img src={logo}alt="logo"width="25"/></span>Mercado - Shop</p>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                        <p className='modal-description'>{props.text}</p>
                    </Typography>
                    <Button variant="text" color="warning"className="mt-3 ms-4"onClick={ocultar}>Cerrar</Button>
                </Box>
            </Modal>
        </div>
    )
}
export default ModalMessage;