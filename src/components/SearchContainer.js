import CircularProgressWithLabel from '../components/CircularProgressWithLabel';
import Item from './Item'
import { useState,useContext, useEffect } from 'react';
import { SearchContext } from './SearchContext';
import '../assets/css/ItemList.css';
import db from '../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";


const SearchContainer =()=>{
    const [searchList,setSearchList]=useState([]);  //datos array busqueda
    const buscar = useContext(SearchContext);
    const [load,setLoad] = useState(true); //estado del componente efecto circular de carga de datos al 100%
   
    useEffect(()=>{
        const searchProducts = async()=>{
            const querySnapshot = await getDocs(collection(db, "products"));
            const datos = querySnapshot.docs.map(document=>({id:document.id,...document.data()}));
            let texto = buscar.buscar.replace(/-/gi,'');
            let texto2 = buscar.buscar.replace(/ /gi,'')
            for (let producto of datos){
                if (producto.categoria === texto.toLowerCase()){
                    return datos.filter(element=>element.categoria===texto)  
                }                    
                else if (producto.marca === texto.toLowerCase()){
                    return datos.filter(element=>element.marca===texto)
                }
                else if ((producto.modelo.toLowerCase()).replace(/-/gi,'') === texto){
                    return datos.filter(element=>element.modelo.toLowerCase().replace(/-/gi,'')===texto)
                }
                else if ((producto.modelo.toLowerCase()).replace(/-/gi,'') === texto2){
                    return datos.filter(element=>element.modelo.toLowerCase().replace(/-/gi,'')===texto2)
                }
            }
        }  
        searchProducts()
            .then((data)=>setSearchList(data))
            .then(()=>setLoad(false))
            .catch((error)=>console.log(error))
},[buscar.buscar])

    return(

        <div className="ItemListContainer container-fluid text-center pt-5">
            {
                load ? <CircularProgressWithLabel value={10}/>:(

                    searchList ===undefined ? <h2 style={{marginTop:'100px',height:'50vh'}}>No se encontro el producto</h2>:(

                    searchList.map(item =>
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
                )
            }
        </div>
    )
}
export default SearchContainer