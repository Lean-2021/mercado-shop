import { createContext, useState } from 'react';

export const CartContext = createContext();  // creacion del cartContext


const CartContextProvider =({children})=>{
    const [cartList,setCartlist] = useState([]);
    const [sumarCant,setSumarCant] = useState(0);   //cantidad total de items comprados
    const [subtotal,setSubtotal] = useState(0);
    const [dateOrder,setDateOrder]=useState();

    const addItem =(item,cant)=>{  // agregar productos al carrito
        
        const buscarProducto = cartList.find(element=>element.id === item.id);// buscar si exsite el producto
        const actualizarProducto = cartList.map((element)=>{
            if(element.id===item.id){  //actualizar la cantidad del producto que tenga el mismo ID
                return{
                    ...element,
                    cantidad:element.cantidad +cant
                }
            }
            return element
        })
        buscarProducto ? setCartlist(actualizarProducto)  // si existe el producto llama a la funcion que actualiza la cantidad
        :(
            setCartlist([   //sino existe lo agrega
                ...cartList,
                {
                    key:item.id,
                    id:item.id,
                    imagen:item.imagen,
                    marca:item.marca,
                    modelo:item.modelo,
                    precio:item.precio,
                    cantidad:cant
                }
            ])
        )
        sumarPrecio(item.precio,cant) //llamar a funcion para sumar precios de los productos
    }
  
    
    const removeItem=(id)=>{  //remover producto del carrito
        const filtrar  = cartList.filter(item=>item.id!==id) //array nuevo con productos de distinto Id al seleccionado
        const filtrarPrecio = cartList.filter(item=>item.id===id) //array con producto de mismo ID 
        setCartlist(filtrar) //filtrar productos con id distinto
            
        if (filtrar.length !==0){
            const removeCant = filtrar.map(element=>element.cantidad) //remover cantidad de CartWidget
            const remove = removeCant.reduce((previousValue,currentValue)=>previousValue + currentValue)
            setSumarCant(remove);      
                const buscarPrecio = filtrarPrecio.map(element=>element.precio) // buscar el precio del producto a eliminar
                const buscarCantidad = filtrarPrecio.map(element=>element.cantidad) // buscar cantidad del producto a eliminar
                const restarPrecio = buscarPrecio * buscarCantidad  //restar el precio
                setSubtotal(subtotal - restarPrecio)// actualizar precio total de la compra
        }
        else{
            setSumarCant(0);
            setSubtotal(0);
        }
        
    }    
   
    const clearCart=()=>{  //borrar todos los productos del carrito
        setCartlist([]);
        setSumarCant(0);
        setSubtotal(0);
    }
    const agregarCantidad =(cant)=>{  //sumar cantidades a CartWidget
            const canti = cartList.map(element=>element.cantidad);
            const sumarCantidad = canti.reduce((previousValue,currentValue)=>previousValue + currentValue,cant);
            setSumarCant(sumarCantidad)
    }
    const sumarPrecio=(precio,cantidad)=>{   //sumar precios de los productos
       const precioProducto = precio * cantidad;
       setSubtotal(subtotal + precioProducto)
    }


    return(
        <CartContext.Provider value={{cartList, addItem, removeItem,clearCart,agregarCantidad,sumarCant,subtotal,dateOrder,setDateOrder,setCartlist}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;
