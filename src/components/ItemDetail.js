import ItemCount from './ItemCount';
import '../assets/css/ItemDetail.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import{Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from "react";
import ModalMessage from '../components/ModalMessage.js';

export const ItemDetail =(props)=>{
    const [itemCount,setItemCount]=useState(0);  // valor inicial del itemcount
    const [modal,setModal]=useState(false);
   
    const ocultar =()=>{
        setModal(false);
    }
    const onAdd=(cant)=>{  //mostrar unidades seleccionadas y ocultar count mostrando boton finalizar compra
        
        if (cant===1){
            setModal(true);    
        }
        else {
            setModal(true);    
        }
        setItemCount(cant)
        console.log(cant)
    }
    return(
        <article className="container"style={{textAlign:'start'}}>
            <div className="card mb-3 card-item-detail"><Link to='/' className="text-end"><span className="btnClose"><FontAwesomeIcon icon={faTimes}color="grey"className="boton"/></span></Link>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.imagen} className="img-fluid rounded-start imagen-description" alt="Imagen Producto"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body body-description">
                            <p className="text-categoria">{props.categoria}</p>
                            <h5 className="card-title text-marca">{props.marca}</h5>
                            <h6 className="text-modelo">Modelo: {props.modelo}</h6>
                                <ul className="text-description">
                                    <li>{props.detalle1}</li>
                                    <li>{props.detalle2}</li>
                                    <li>{props.detalle3}</li>
                                    <li>{props.detalle4}</li>
                                    <li>{props.detalle5}</li>
                                    <li>{props.detalle6}</li>
                                </ul>
                            <p className="text-precio">{'$ '+props.precio}</p>
                            <p className="text-stock">Stock : {props.stock+' u.'}</p>
                            {
                                    itemCount===0 ? 
                                        <ItemCount cantidad={itemCount}stock ={props.stock}onAdd={onAdd}/>    
                                    :(<Link to='/cart'className="boton-finalizar-compra"><Button variant="contained"color="error"className="mt-5 mb-5 p-4">Finalizar Compra</Button></Link>)       
                            }
                            {
                                itemCount ===1 ?
                                <ModalMessage mostrar={modal}text={`La cantidad es de ${itemCount} producto`}onAdd={ocultar}/>:
                                (<ModalMessage mostrar={modal}text={`La cantidad es de ${itemCount} productos`}onAdd={ocultar}/>)
                                
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};