import IconButton from "@mui/material/Button";
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import '../assets/css/ItemCount.css';
import { useState } from "react";


const ItemCount =(props) =>{
    const [agregarCantidad, setAgregarCantidad] = useState(parseInt(props.cantidad));
    const addCantidad = ()=>{        //sumar cantidad hasta 5
        if (agregarCantidad <props.stock){
                setAgregarCantidad(agregarCantidad +1)        
        }
    }
    const removeCantidad =() =>{  //restar cantidad hasta 1
        if (agregarCantidad >1){
            setAgregarCantidad(agregarCantidad -1)
        }
    }
    return(
        <div className="count container text-center mt-5">
            <h5 className="titleCantidad">Cantidad</h5>
            <IconButton variant="contained"size="small"onClick={removeCantidad}><RemoveIcon fontSize="large"/></IconButton>
            <span className="ms-4 me-4 textCantidad">{agregarCantidad}</span>
            <IconButton variant="contained"size="small"onClick={addCantidad}><AddIcon fontSize="large"/></IconButton>
            <Button variant="contained"color="secondary"className="mt-3">Agregar a Carrito</Button>
        </div>
    );
}
export default ItemCount;