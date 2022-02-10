import { useEffect, useState } from 'react';
import {ItemDetail} from './ItemDetail';
import CircularProgressWithLabel from '../components/CircularProgressWithLabel';
import { CustomProductos } from "./CustomProductos";
import productos from '../utils/productos';





export const ItemDetailContainer =()=>{
    const [loading,setLoading]=useState(false);
    const [description,setDescription]=useState([productos[0]]);
    useEffect(()=>{
        setLoading(true);
        CustomProductos(2000,description)
        .then((data)=>setDescription(data))
        .then (()=>setLoading(false))
        .catch(()=>console.log('error deconexion'))
    },[]);

    return(
        <section className="container pt-5">
            <div className="row">
                <div className="col-md-12">
                    {
                        loading ? <CircularProgressWithLabel value={100}/> :(          
                            description.map(item=>(
                                <ItemDetail 
                                    key={item.id}
                                    imagen={item.imagen}
                                    categoria={item.categoria}
                                    marca={item.marca}
                                    modelo={item.modelo}
                                    precio={item.precio}
                                    stock={item.stock}
                                    detalle1={item.detalle1}
                                    detalle2={item.detalle2}
                                    detalle3={item.detalle3}
                                    detalle4={item.detalle4}
                                    detalle5={item.detalle5}
                                    detalle6={item.detalle6}
                                />
                            ))

                        )
                    }
                </div>
            </div>
        </section>
    )
}