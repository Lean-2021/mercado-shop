import { useEffect, useState } from "react";
import Item from "./Item";
import '../assets/css/ItemList.css';
import CircularProgressWithLabel from '../components/CircularProgressWithLabel';
import productos from "../utils/productos.js";
import { CustomProductos } from "./CustomProductos";
import { useParams} from "react-router-dom";


const ItemList = ()=>{
    
    const [itemList,setItemList] = useState([]);  //estado inicial de productos vacio
    const [load,setLoad] = useState(true); //estado del componente efecto circular de carga de datos al 100%
    const {categoryId} = useParams();
    const errorDatos =()=>{
        console.log('error de datos');
        alert('Error de conexiòn de datos')
    } 
    useEffect(()=>{  //obtener datos de la promesa en 2 segundos 
        setLoad(true)
        switch (categoryId){
            case undefined:    // cuando no se elige un parametro mostrar todos los productos
                CustomProductos(2000,productos)
                .then((data) => setItemList(data))
                .then(()=>setLoad(false))
                .catch(()=>errorDatos())
            break;
            case 'novedades':   // cuando se selecciona novedades filtrar productos por el año 2022
                CustomProductos(2000,productos.filter(item=> item.anio === 2022))
                .then((data) => setItemList(data))
                .then(()=>setLoad(false))
                .catch(()=>errorDatos())
            break;
            case 'ofertas':  // cuando se selecciona ofertas filtrar productos que tengan un precio menos a $30.000
                CustomProductos(2000,productos.filter(item=> item.precio < 30000))
                .then((data) => setItemList(data))
                .then(()=>setLoad(false))
                .catch(()=>errorDatos())
            break;
            default:
                for (let producto of productos){
                    if (categoryId === producto.categoria){  // si el valor de categoryId es igual al de la categoria filtrar productos por la categoria
                        CustomProductos(2000,productos.filter(item=>item.categoria === categoryId))
                            .then((data)=>setItemList(data))
                            .then(()=>setLoad(false))
                            .catch(()=>errorDatos())
                    }
                    else if (categoryId === producto.marca){  //si el valos de categoryId es igual al de la marca filtrar productos por marca y mostrarlo en category/marca
                        CustomProductos(2000,productos.filter(item=>item.marca === categoryId))
                            .then((data)=>setItemList(data))
                            .then(()=>setLoad(false))
                            .catch(()=>errorDatos())
                    }
                }
            break;                      
        }
    },[categoryId]);
    return(
        <div className="ItemListContainer container-fluid text-center">
            {
                load ? <CircularProgressWithLabel value={10}/> : (
                    itemList.map(item =>
                        <Item
                            key={item.id}
                            item={item.id}
                            imagen={item.imagen}
                            categoria={item.categoria.charAt(0).toUpperCase() + item.categoria.slice(1)}
                            marca={item.marca.charAt(0).toUpperCase() + item.marca.slice(1)}
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

