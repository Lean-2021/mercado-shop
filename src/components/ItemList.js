import { useEffect, useState } from "react";
import Item from "./Item";
import '../assets/css/ItemList.css';
import CircularProgressWithLabel from '../components/CircularProgressWithLabel';
import productos from "../utils/productos.js";
import { CustomProductos } from "./CustomProductos";
const ItemList = ()=>{
    
    const [itemList,setItemList] = useState([]);  //estado inicial de productos vacio
    const [load,setLoad] = useState(true); //estado del componente efecto circular de carga de datos al 100%
    const errorDatos =()=>{
        console.log('error de datos');
        alert('Error de conexiòn de datos')
    } 
    useEffect(()=>{  //obtener datos de la promesa en 2 segundos 

        setLoad(true)
        CustomProductos(2000,productos)
        .then((data) => setItemList(data))
        .then(()=>setLoad(false))
        .catch(()=>errorDatos())
    },[]);
    return(
        <div className="ItemListContainer">
            {
                load ? <CircularProgressWithLabel value={10} /> : (
                    itemList.map(item =>
                        <Item
                            key={item.id}
                            imagen={item.imagen}
                            categoria={item.categoria}
                            marca={item.marca}
                            modelo={item.modelo}
                            precio={'$ '+item.precio}
                            stock={item.stock}
                        />
                    )
                )
            }
        </div>
    )
}
export default ItemList

