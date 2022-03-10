import ItemCount from './ItemCount';
import '../assets/css/ItemDetail.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import{Link, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { useContext, useState } from "react";
import {Snack} from './Snack';
import { CartContext } from './CartContext';
import { UserContext } from './UserContext';


export const ItemDetail =(props)=>{
    const [itemCount,setItemCount]=useState(0);  // valor inicial del itemcount
    const [snack,setSnack]=useState(false);
    const datos = useContext(CartContext);
    const user = useContext(UserContext);
    const navegar = useNavigate();
    
    const login=()=>{  // ir hacia la ruta login
        navegar('/login')
    }
    
    const ocultar =()=>{  // ocultar SnackBar
        setSnack(false);
    }
    const onAdd=(cant)=>{  //mostrar unidades seleccionadas y ocultar count mostrando boton finalizar compra  
        if (cant>=1){
            setSnack(true);    
        }
        else {
            setSnack(false);    
        }
        setItemCount(cant);

        datos.addItem(props,cant)//agregar datos al carrito item y cantidad
        datos.agregarCantidad(cant);
    }
    return(
        <article className="container"style={{textAlign:'start'}}>
            <div className="card mb-3 card-item-detail"><Link to='/' className="text-end buttonClose"><span className="btnClose"><FontAwesomeIcon icon={faTimes}color="grey"className="boton"/></span></Link>
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
                                    user.activeLogin ?
                                    itemCount===0 ?
                                        <section className="boton-count">
                                            <ItemCount cantidad={itemCount}stock ={props.stock}onAdd={onAdd}/>    
                                        </section>
                                            :(<Link to='/cart'className="boton-finalizar-compra"><Button variant="contained"color="error"className="mt-5 mb-5 p-4 btn-ver-compras">Ver Compras</Button></Link>)       
                            
                                    :(
                                        <Button variant='contained'color='error'className='btn-login'onClick={login}>Login</Button>
                                    )
                            }
                            {
                                snack &&
                                itemCount ===1? 
                                <Snack mostrar={snack}time={3000}ocultar={ocultar}text={`Se agrego ${itemCount} unidad al carrito`}color={"success"}/>
                                :(<Snack mostrar={snack}time={3000}ocultar={ocultar}text={`Se agregaron ${itemCount} unidades al carrito`}color={"success"}/>)
   
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};