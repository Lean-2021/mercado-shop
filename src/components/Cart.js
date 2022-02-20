import { useContext } from "react";
import {CartContext} from "./CartContext";
import '../assets/css/Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import {Link} from 'react-router-dom';

export const Cart =()=>{
    const datos = useContext(CartContext);

    return(
        <section>
            {     //mostrar o no el boton de limpiar carrito segun si hay datos o no 
                datos.cartList.length === 0 ?
                <section className="container boton-seguir-limpiar">
                <div className="row">           
                    <div className="col-md-12 mt-5 boton-seguir-solo">
                        <Link to='/'><Button variant="contained" color="primary"className="text-start">Seguir Comprando</Button></Link>
                        <Button variant="contained" color="error"style={{display:'none'}}>Limpiar Carrito</Button>
                    </div>
                </div>
                </section>
                :(
                    <section className="container botones container-sm">
                        <div className="row">           
                            <div className="col-md-6 mt-5 text-start boton-seguir">
                                <Link to='/'><Button variant="contained"color="primary">Seguir Comprando</Button></Link>
                            </div>
                            <div className="col-md-6 mt-5 text-end boton-limpiar">
                                <Button variant="contained" color="error"onClick={datos.clearCart}>Limpiar Carrito</Button>
                            </div>
                        </div>
                    </section> 
                )
            }       
            {  // mostrar mensaje cuando el carrito este vacio y de lo contrario mostrar los productos
                datos.cartList.length === 0 ?
                <section style={{height:'30vh'}}>
                    <h2 className="text-center mt-5">No hay productos En el Carrito</h2>
                </section>   
                :(
                    datos.cartList.map(item=>   
                
                        <section className="container cart-container text-center">
                            <div className="row cart-row">
                                <div className="col-md-3">
                                    <img src={item.imagen}alt="imagen producto" width="180"height="120"className="cart-imagen mt-2"/>
                                </div>
                                <div className="col-md-3 cart-marca-modelo">
                                    <h2>{item.marca.charAt(0).toUpperCase()+item.marca.slice(1)}</h2>
                                    <h5>{item.modelo}</h5>
                                </div>
                                <div className="col-md-3 cart-cant-precio">
                                    <h5>Cantidad: {item.cantidad}</h5>
                                    <h5>Precio: $ {item.precio} c/u</h5>
                                </div>
                                <div className="col-md-3">
                                <FontAwesomeIcon icon={faTimes}color="black"className="cart-borrar-item"title="Borrar item" onClick={()=>datos.removeItem(item.id)}/>
                                </div>
                            </div>
                        </section>
                    )
                )
            }    
        </section>
    )
}