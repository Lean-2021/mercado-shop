import { useEffect, useState} from "react";
import Item from "./Item";
import '../assets/css/ItemList.css';
import CircularProgressWithLabel from '../components/CircularProgressWithLabel';
import { useParams,useNavigate} from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../utils/firebaseConfig";


const ItemList = ()=>{

    const [itemList,setItemList] = useState([]);  //estado inicial de productos vacio
    const [load,setLoad] = useState(true); //estado del componente efecto circular de carga de datos al 100%
    const {categoryId} = useParams();
    const goTo=useNavigate();
    
    useEffect(()=>{  //obtener datos de FireBase          
        setLoad(true);
        
        const errorDatos =()=>{
            console.log('error de datos');
            goTo('/error');
            window.location.reload();
        } 
        
        switch (categoryId){
            case undefined:    // cuando no se elige un parametro mostrar todos los productos      
                const fireBaseProducts = async()=>{
                    const querySnapshot = await getDocs(collection(db, "products"));
                    const datos = querySnapshot.docs.map(document=>({id:document.id,...document.data()}));
                    return datos  
                }
                fireBaseProducts()
                    .then( data => setItemList(data))
                    .then(()=>setLoad(false))
                    .catch(()=>errorDatos())              
            break;
            case 'novedades':   // cuando se selecciona novedades filtrar productos por el año 2022  
                const fireBaseNovedades = async()=>{
                    let dato = query(collection(db,'products'), where('anio','==',2022))
                    const querySnapshot = await getDocs(dato);
                    const datos = querySnapshot.docs.map(document=>({id:document.id,...document.data()}));
                    return datos
                }
                fireBaseNovedades()
                    .then( data => setItemList(data))
                    .then(()=>setLoad(false))
                    .catch(()=>errorDatos());  
            break;
            case 'ofertas':  // cuando se selecciona ofertas filtrar productos que tengan un precio menor a $30.000
                const fireBaseOfertas = async()=>{
                    let dato = query(collection(db,'products'), where('precio','<',30000))
                    const querySnapshot = await getDocs(dato);
                    const datos = querySnapshot.docs.map(document=>({id:document.id,...document.data()}));
                    return datos
                }
                fireBaseOfertas()
                    .then( data => setItemList(data))
                    .then(()=>setLoad(false))
                    .catch(()=>errorDatos())
            break;
            default:
                const fireBaseCategorias = async()=>{
                    const data = await getDocs(collection(db, "products"));  //traer todos los datos de productos
                    const productos = data.docs.map(document=>({id:document.id,...document.data()}));
    
                    for (let producto of productos){
                        if (categoryId===producto.categoria){   //si la categoria coincide con la categoria mostrar productos por categoria 
                            let categoria = query(collection(db,'products'), where('categoria','==',categoryId))
                            const querySnapshot = await getDocs(categoria)
                            const datos = querySnapshot.docs.map(document=>({id:document.id,...document.data()}));  
                            return datos
                        }
                        else if (categoryId===producto.marca){  //mostrar productos en categoria pero por marcas
                            let marca = query(collection(db,'products'), where('marca','==',categoryId))
                            const querySnapshot = await getDocs(marca)
                            const datos = querySnapshot.docs.map(document=>({id:document.id,...document.data()})); 
                            return datos
                        }
                    }
                }
                fireBaseCategorias()
                    .then( data => setItemList(data))
                    .then(()=>setLoad(false))
                    .catch(()=>errorDatos())
            break;                      
            }
    },[categoryId,goTo]);
    return(
        <div className="ItemListContainer container-fluid text-center">
            {
                load ? <CircularProgressWithLabel value={10}/> : (
                    itemList.map(item =>
                        <Item
                            key={item.id}
                            id={item.id}
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

