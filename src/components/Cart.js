import { useContext, useEffect, useState } from "react";
import {CartContext} from "./CartContext";
import '../assets/css/Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import {Link} from 'react-router-dom';
import ModalMessage from './ModalMessage';
import { ModalConfirmacion } from "./ModalConfirmacion";
import { UserContext } from "./UserContext";
import { collection, serverTimestamp, setDoc,doc, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import BackLoad from './BackLoad';

export const Cart =()=>{
    const [loadBack,setLoadBack]=useState(false); //mostrar - ocultar backdrop
    const datos = useContext(CartContext);
    const user = useContext(UserContext);
    const [envio,setEnvio]=useState(0);  // estado costo de envio
    const [pagoOnline,setPagoOnline]=useState(0); //estado descuento pago online
    const [pagoTotal,setPagoTotal]= useState(0);  // estado del pago total
    const [modalFinalizar,setModalFinalizar]=useState(false); // estado mostrar modal finalizar compra 
    const [deleteItem, setDeleteItem]=useState(false);  // estado mostrar modal borrar item
    const [deleteCarrito,setDeleteCarrito]=useState(false);  // estado mostrar modal limpiar carrito
    const [producto,setProducto]=useState(0);  //estado del valor del id del item a eliminar
    const [resultado,setResultado]=useState();  //pasar id de orden de compra al modal

    const finalizarCompra =() =>{
        setLoadBack(true); //mostrar backdrop
        let order={   //crear orden de compra
            buyer:{   //datos del usuario que compro
                name: user.userActive.name,
                email: user.userActive.email,
                phone: user.userActive.phone
            },
            items:datos.cartList.map(element=>({  //detalles del producto que compro
                id:element.id,
                title:element.modelo,
                price:element.precio,
                qty:element.cantidad
            })),
            date:serverTimestamp(),
            total:pagoTotal
        }
        console.log(order);
        datos.setDateOrder(order);

        const createOrderFirebase= async()=>{  // crear orden de compra en firebase
            const newOrderRef = doc(collection(db,"orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef
        }
        createOrderFirebase()
            .then((result)=> setResultado(result.id))
            .then(()=>{setModalFinalizar(true);
                datos.cartList.map(async(item) =>{
                    const itemFire = doc(db,'products',item.id);
                    await updateDoc(itemFire,{
                        stock: increment(-item.cantidad)
                    })
                })    
                datos.clearCart();
            })
            .then(()=>setLoadBack(false)) //ocultar backdrop
            .catch(error => console.log(error))

        let userLogin = user.userActive.name;  // guardar en una variable el nombre del usuario logeado    
        localStorage.removeItem(`usuario${userLogin}`)  //borrar datos guardados de compra al finalizar la compra
    }
    const ocultarCompra =()=>{  //ocultar modal de finalizar compra 
        setModalFinalizar(false);
    }

    useEffect(()=>{    //actualizar costo de envío del producto según el valor de la compra
        switch (true){
            case (datos.subtotal <= 25000):setEnvio(500);
            break;
            case (datos.subtotal > 25000 && datos.subtotal<100000): setEnvio(800);
            break;
            case (datos.subtotal > 100000 && datos.subtotal <=200000): setEnvio(1100);
            break;
            default: setEnvio(1500);
        }
        const descuento = (datos.subtotal*0.1);  // actualizar descuento de pago online ( 10% )
        setPagoOnline(descuento);

        const total = (datos.subtotal + envio) - descuento;  // actualizar el importe total de la compra
        setPagoTotal(total);
    },[datos.subtotal,envio]
    )
    // mostrar modal de confirmacion de eliminar items del carrito (aceptar / cancelar)*************************
    const aceptar = () =>{  //eliminar item ó cancelar
        setDeleteItem(false);
        datos.removeItem(producto);
    }
    const cancelar = ()=>{
        setDeleteItem(false);
    }
    const confirmarEliminar =(id) =>{ //modal confirmacion eliminacion del item    
        setDeleteItem(true)
        setProducto(id)  //almacenar el valor del id del item a eliminar
    }
    //********************************************************************************************************** 
    // motrar modal limpiar carrito (aceptar / Cancelar)
    const cleanCarrito =()=>{
        setDeleteCarrito(true);
    }
    const aceptarLimpiar =() =>{  // aceptar limpiar carrito
        datos.clearCart();
        setDeleteCarrito(false);
    }
    const cancelarLimpiar =()=>{
        setDeleteCarrito(false);
    }

    return(
        <section>
            {     //mostrar o no el boton de limpiar carrito segun si hay datos o no 
                datos.cartList.length === 0 ?
                <section className="container boton-seguir-limpiar">
                <div className="row">           
                    <div className="col-md-12 mt-5 boton-seguir-solo">
                        <Link to='/'><Button variant="contained" color="primary"className="text-start">Seguir Comprando</Button></Link>
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
                                <Button variant="contained" color="error"onClick={cleanCarrito}>Limpiar Carrito</Button>
                            </div>
                        </div>
                    </section> 
                )
            }    
            {   
                datos.cartList.length>0 &&      // Detalles de la compra
                <section className="container cart-row-detail offset-md-8 text-center">
                        <div className="row">
                            <h6 className="compra-detail-title mb-5">Detalles de Compra</h6>
                            <div className="col-md-6 col-7 text-start">
                                <p>Total Productos :</p>
                                <p><b>Subtotal :</b></p>
                                <p>Envío : </p>
                                <p>Pago Online : </p>
                                <h6 className="compra-total-detail">Total : </h6>
                            </div>
                            <div className="col-md-6 col-5 text-end detalle-cantidades">
                                <p className="detail-total-productos">{datos.sumarCant}</p>
                                <p className="detail-subtotal"><b>$ {datos.subtotal}</b></p>
                                <p>$ {envio}</p>
                                <p>- $ {pagoOnline}</p>
                                <p className="compra-detail-pago">$ {pagoTotal}</p>
                            </div>
                            <Button variant="contained" color="error"className="mt-4 p-3 btn-finalizar"onClick={finalizarCompra}>Finalizar Compra</Button>
                        </div>
                </section>
            }

            {  // mostrar mensaje cuando el carrito este vacio y de lo contrario mostrar los productos
                datos.cartList.length === 0 ?
                <section style={{height:'30vh'}}>
                    <h2 className="text-center mt-5">No hay productos En el Carrito</h2>
                </section>   
                :(
                    datos.cartList.map(item=>   
                
                        <section key={item.id}className="container-fluid cart-container text-center">
                            <div className="row cart-row">
                                <div className="col-md-3">
                                    <img src={item.imagen}alt="imagen producto" width="180"height="110"className="cart-imagen mt-1"/>
                                </div>
                                <div className="col-md-3 cart-marca-modelo">
                                    <h3>{item.marca.charAt(0).toUpperCase()+item.marca.slice(1)}</h3>
                                    <h6>{item.modelo}</h6>
                                </div>
                                <div className="col-md-3 cart-cant-precio">
                                    <h6>Cantidad: {item.cantidad}</h6>
                                    <h6>Precio: $ {item.precio} c/u</h6>
                                </div>
                                <div className="col-md-3">
                                <FontAwesomeIcon icon={faTimes}color="black"className="cart-borrar-item"title="Borrar item" onClick={()=>confirmarEliminar(item.id)}/>
                                {
                                deleteItem && <ModalConfirmacion mostrar ={deleteItem} text={'Desea Eliminar el producto de la compra ?'}aceptar={aceptar} cancelar={cancelar}/>  //mostrar modal confirmacion elminar producto
                                }
                                </div>
                            </div>
                           
                            {
                                deleteCarrito && <ModalConfirmacion mostrar ={deleteCarrito} text={'Desea Eliminar todos los productos ?'}aceptar={aceptarLimpiar} cancelar={cancelarLimpiar}/>  //mostrar modal confirmacion limpiar carrito
                            }
                        </section>
                    )
                )
            }
            <BackLoad open={loadBack}/>
            {modalFinalizar && <ModalMessage mostrar={modalFinalizar} text={resultado} close={ocultarCompra}/>}     
        </section>
    )
}