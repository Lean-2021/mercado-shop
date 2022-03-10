import {Modal,Box} from '@mui/material';
import logo from '../assets/image/menu.png';  // importar logo de la web desde assets imagenes
import style from '../assets/css/ModalConfirmacion.module.css';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

export const ModalConfirmacion =(props)=>{

    const cancelar =()=>{
       props.cancelar();
    }
    
    const aceptar =()=>{    
        props.aceptar();
    }
    
    const styleBox = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#EFE8E7',
        border: '2px solid grey',
        boxShadow: 24,
        color:'black',
        p: 4,
    };
    return(
        <div>
            <Modal
                open={props.mostrar}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={style.modalConfirm}
            >
                <Box sx={styleBox}>
                    <div className={`row ${style.modalDeleteItem}`}>
                        <p className={`text-center ${style.titleModal}`}><span className="text-center me-3"><img src={logo}alt="logo"width="25"/></span>Mercado - Shop</p>
                    </div>
                    <div className='row text-center pt-3 pb-2'>
                        <p><b><i>{props.text}</i></b></p>
                    </div>
                    <div className={`row text-center ${style.botonesModal}`}>
                        <div className={`col-md-6 ${style.colCancel}`}>
                            <span className={style.cancel}onClick={cancelar}><CancelIcon fontSize='large'/></span>
                        </div>
                        <div className={`col-md-6 ${style.colConfirmar}`}>
                            <span className={style.confirmarOk} onClick={aceptar}><CheckIcon fontSize='large'/></span>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
