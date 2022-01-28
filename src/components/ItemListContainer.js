import '../assets/css/ItemListContainer.css';

const ItemListContainer =({greeting})=>{
    return(
        <div className="itemList">
            {greeting}
        </div>
    );
}
export default ItemListContainer;