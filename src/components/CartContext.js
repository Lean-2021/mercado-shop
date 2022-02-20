import { createContext, useState } from 'react';

export const CartContext = createContext();  // creacion del cartContext


const CartContextProvider =({children})=>{
    const [cartList,setCartlist] = useState([]);
    console.log(cartList)
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
                    id:item.id,
                    imagen:item.imagen,
                    marca:item.marca,
                    modelo:item.modelo,
                    precio:item.precio,
                    cantidad:cant
                }
            ])   
        )
    }
    const removeItem=(id)=>{  //remover producto del carrito
        setCartlist(  //filtrar productos con id distinto
            cartList.filter(item=>item.id!==id)  
        )
    }
    const clearCart=()=>{  //borrar todos los productos del carrito
        setCartlist([]);
    }
    return(
        <CartContext.Provider value={{cartList, addItem, removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;
