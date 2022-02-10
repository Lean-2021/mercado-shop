export const CustomProductos =(timeout,data)=>{  //promise de productos , simular tiempo de obtención de datos en 2 segundos
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