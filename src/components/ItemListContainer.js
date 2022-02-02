import '../assets/css/ItemListContainer.css';
import ItemCount from './ItemCount';

const ItemListContainer =({greeting})=>{
    return(
        <div className="itemList">
            <p className="text-center">{greeting}</p>
            <ItemCount cantidad="1"stock ="5"/>
        </div>
    );
}
export default ItemListContainer;