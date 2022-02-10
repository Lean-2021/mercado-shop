import ItemCount from "./ItemCount";
import '../assets/css/ItemDetail.css';
export const ItemDetail =(props)=>{
    return(
        <article>
            <div className="card mb-3 card-item-detail">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.imagen} className="img-fluid rounded-start imagen-description" alt="Imagen Producto"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body body-description">
                            <p className="text-categoria">{props.categoria}</p>
                            <h5 className="card-title text-marca">{props.marca}</h5>
                            <h6 className="text-modelo">Modelo: {props.modelo}</h6>
                                <ul className="text-description">
                                    <li>{props.detalle1}</li>
                                    <li>{props.detalle2}</li>
                                    <li>{props.detalle3}</li>
                                    <li>{props.detalle4}</li>
                                    <li>{props.detalle5}</li>
                                    <li>{props.detalle6}</li>
                                </ul>
                            <p className="text-precio">{'$ '+props.precio}</p>
                            <p className="text-stock">Stock : {props.stock+' u.'}</p>
                            <ItemCount cantidad="1"stock ="5"/>    
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};