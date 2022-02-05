import { useEffect, useState } from "react";
import Item from "./Item";
import '../assets/css/ItemList.css';
import ubi from '../assets/image/uapAcLite.jpg';
import cap from '../assets/image/capXl.png';
import archer from '../assets/image/archer.jpg';
import mercusys from '../assets/image/mw301.jpg';
import latitude from '../assets/image/latitud7420.jpg';
import moni from '../assets/image/monisamsung.jpg';
import samsung from '../assets/image/f24t35.jpg';
import hpPav from '../assets/image/hpPavilion.jpg';
import hpNot from '../assets/image/250g8.jpg';
import ideaPad from '../assets/image/ideapad.webp';
import lenovoV from '../assets/image/v50s.jpg';
import monDell from '../assets/image/E2420H.jpg';
import dellOpt from '../assets/image/3070.jpg';
import ecotank from '../assets/image/ecotank.jpg';
import brother from '../assets/image/hl1212w.png';
import hpLaser from '../assets/image/137fnw.jpg';
import mer from '../assets/image/mw325.jpg';
import lbem5 from '../assets/image/lbem5.jpg';

// const productos =[];
const productos = [   //arrays de productos
    {
        id:1,
        imagen:`${ubi}`,
        categoria:'Contectividad',
        marca:'Ubiquiti',
        modelo:'UAP-AC-Lite',
        precio:13000,
        stock:10
    },
    {
        id:2,
        imagen:`${cap}`,
        categoria:'Conectividad',
        marca:'Mikrotik',
        modelo:'cAP XL ac',
        precio:15000,
        stock:5
    },
    {
        id:3,
        imagen:`${archer}`,
        categoria:'Conectividad',
        marca:'Tp-Link',
        modelo:'Archer AX10',
        precio:8200,
        stock:15
    },
    {
        id:4,
        imagen:`${mercusys}`,
        categoria:'Conectividad',
        marca:'Mercusys',
        modelo:'MW301R',
        precio:1300,
        stock:50
    },
    {
        id:5,
        imagen:`${latitude}`,
        categoria:'Notebook',
        marca:'Dell',
        modelo:'Latitude 7420',
        precio:350000,
        stock:6
    },
    {
        id:6,
        imagen:`${moni}`,
        categoria:'Monitores',
        marca:'Samsung',
        modelo:'A330N',
        precio:24000,
        stock:25
    },
    {
        id:7,
        imagen:`${samsung}`,
        categoria:'Monitores',
        marca:'Samsung',
        modelo:'F24T35',
        precio:29500,
        stock:12
    },
    {
        id:8,
        imagen:`${hpPav}`,
        categoria:'Desktop',
        marca:'Hp Pavilion',
        modelo:'Tg01-1160xt',
        precio:281000,
        stock:4
    },
    {
        id:9,
        imagen:`${hpNot}`,
        categoria:'Notebook',
        marca:'Hp',
        modelo:'250 G8',
        precio:75200,
        stock:16
    },
    {
        id:10,
        imagen:`${ideaPad}`,
        categoria:'Notebook',
        marca:'Lenovo',
        modelo:'IdeaPad 15ALC6',
        precio:105750,
        stock:8
    },
    {
        id:11,
        imagen:`${lenovoV}`,
        categoria:'Desktop',
        marca:'Lenovo',
        modelo:'V50s',
        precio:114900,
        stock:18
    },
    {
        id:12,
        imagen:`${monDell}`,
        categoria:'Monitores',
        marca:'Dell',
        modelo:'E2420H',
        precio:25300,
        stock:24
    },
    {
        id:13,
        imagen:`${dellOpt}`,
        categoria:'Desktop',
        marca:'Dell',
        modelo:'Optiplex 3070',
        precio:171300,
        stock:9
    },
    {
        id:14,
        imagen:`${ecotank}`,
        categoria:'Impresoras',
        marca:'Epson',
        modelo:'EcoTank L3210',
        precio:35990,
        stock:14
    },
    {
        id:15,
        imagen:`${brother}`,
        categoria:'Impresoras',
        marca:'Brother',
        modelo:'HL-1212W',
        precio:27500,
        stock:23
    },
    {
        id:16,
        imagen:`${hpLaser}`,
        categoria:'Impresoras',
        marca:'Hp',
        modelo:'LaserJet 137fnw',
        precio:47150,
        stock:6
    },
    {
        id:17,
        imagen:`${mer}`,
        categoria:'Conectividad',
        marca:'Mercusys',
        modelo:'MW325R',
        precio:1720,
        stock:34
    },
    {
        id:18,
        imagen:`${lbem5}`,
        categoria:'Conectividad',
        marca:'Ubiquiti',
        modelo:'LBE-M5-23',
        precio:6750,
        stock:52
    }
]
const customProductos =(timeout,data)=>{  //promise de productos , simular tiempo de obtención de datos en 2 segundos
    return new Promise((resolve,reject)=>{
        setTimeout(() => {    
            if (data.length >0){  // si la lista de datos no esta vacia obtener datos
                resolve(data)
            }else{
                reject('Error')
            }
        }, timeout);
    });
}

const ItemList = ()=>{
    const [itemList,setItemList] = useState([]);  //estado inicial de productos vacio
    const errorDatos =()=>{
        console.log('error de datos');
        alert('Error de conexiòn de datos')
    } 
    useEffect(()=>{  //obtener datos de la promesa en 2 segundos 
        customProductos(2000,productos)
        .then((data) => setItemList(data))
        .catch(()=>errorDatos())
    },[]);
    return(
        <div className="ItemListContainer">
            {
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
            }
        </div>
    )
}
export default ItemList

