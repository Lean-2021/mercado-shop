import {Link} from 'react-router-dom';
import style from '../assets/css/Error404.module.css';
import logo from '../assets/image/menu.png'; 
import face from '../assets/image/triste.jpg';

export default function Error404 (){
    return(
        <section className={style.errorContainer}>
            <div className='container text-center'>
                <div className='row'>
                    <div className='col-md-12'>
                        <img src={face}alt='cara triste'className={style.faceError}/>
                    </div>
                </div>
                <div className='row'>
                    <div className={`col-md-12 ${style.infoError}`}>
                        <h2>UPS...ocurrió un error</h2>
                        <h3 className='pt-2'>vuelve a intentarlo</h3>
                       <p className={style.linkError}><Link to='/'style={{textDecoration:'none'}}><img src={logo}alt="logo"className={style.logoError}/><span className={style.mercadoLink}>Mercado-Shop</span></Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}