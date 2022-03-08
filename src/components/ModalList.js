export const ModalList=(props)=>{
    return(
        <section className="pt-2 text-center">
            <ul style={{listStyle:'none'}}>
                <li>
                    Producto:  {props.title}
                </li>
                <li>
                    Precio:  $ {props.price}
                </li>
                <li>
                    Cantidad:  {props.qty}
                </li>
            </ul>
        </section>
    )
}