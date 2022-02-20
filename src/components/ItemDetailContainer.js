import { useEffect, useState } from 'react';
import {ItemDetail} from './ItemDetail';
import CircularProgressWithLabel from '../components/CircularProgressWithLabel';
import {CustomProductos} from "./CustomProductos";
import productos from '../utils/productos.js';
import {useParams} from 'react-router-dom';
import '../assets/css/ItemDetailContainer.css';


const ItemDetailContainer =()=>{
    const [loading,setLoading]=useState(true);
    const [itemDetail,setItemDetail]=useState([]);
    const {id} = useParams();
    useEffect(()=>{
        setLoading(true);  
                CustomProductos(2000,productos.find(element=>element.id ===parseInt(id)))
                .then((data)=>setItemDetail(data))
                .then (()=>setLoading(false))
                .catch(error=>console.log(error))   
    },[id]);

    return(
        <section className="card-detail container-fluid text-center pt-5">
            <div className="row">
                <div className="col-md-12">
                    {
                        loading ? <CircularProgressWithLabel value={10}/> : (  
                            <ItemDetail
                                id={itemDetail.id}
                                // id={itemDetail.id}
                                categoria={itemDetail.categoria.charAt(0).toUpperCase()+itemDetail.categoria.slice(1)}
                                imagen={itemDetail.imagen}
                                marca={itemDetail.marca.charAt(0).toUpperCase()+itemDetail.marca.slice(1)}
                                modelo={itemDetail.modelo}
                                precio={itemDetail.precio}
                                stock={itemDetail.stock}
                                detalle1={itemDetail.detalle1}
                                detalle2={itemDetail.detalle2}
                                detalle3={itemDetail.detalle3}
                                detalle4={itemDetail.detalle4}
                                detalle5={itemDetail.detalle5}
                                detalle6={itemDetail.detalle6}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}
export default ItemDetailContainer;