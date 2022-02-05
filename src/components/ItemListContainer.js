import '../assets/css/ItemListContainer.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer =()=>{
    return(
        <div className="itemList">
            <ItemList />
            <ItemCount cantidad="1"stock ="5"/>
        </div>
    );
}
export default ItemListContainer;