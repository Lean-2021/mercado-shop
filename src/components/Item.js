import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../assets/css/Item.css';


// generar card de items
const Item =(props) =>{
    return(
        <div className="Card">
            <Card sx={{ width: 220 }} className="card-items">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={props.imagen}
                        id="card-img"
                        alt="Item Producto"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div"className="card-categoria pb-1">
                            {props.categoria}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div"className="card-title">
                            {props.marca}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.modelo}
                        </Typography>
                        <Typography variant="h6"className="card-precio pt-1">
                            {props.precio}
                        </Typography>
                        <Typography variant="body2" className="card-stock pt-2">
                            Stock : {props.stock}
                        </Typography> 
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};
export default Item;