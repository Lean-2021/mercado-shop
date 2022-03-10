import { Button } from '@mui/material';
import { useState } from 'react';
import style from '../assets/css/Login.module.css';
import {Link,useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from './UserContext';
import {useContext} from 'react';
import {CartContext} from './CartContext';

const Login =()=>{
    const [usuario,setUsuario]=useState('');
    const [contraseña,setContraseña]=useState('');
    const compras = useContext(CartContext);
    const data = useContext(UserContext);
    const navegar = useNavigate();
    const [usuarioError,setUsuarioError]=useState(false); //mostrar mensaje error usuario 
    const [mensajeUsuario,setMensajeUsuario]=useState(''); //mensaje usuario
    const [passwordError,setPasswordError]=useState(false); //mostrar mensaje error password 
    const [mensajePassword,setMensajePassword]=useState(''); //mensaje password
    
    const blockSpace =(evt)=>{  // bloquear espacios en blanco
        if (evt.keyCode ===32) evt.preventDefault();
    }

    const loginIn =()=>{
        const usuarioLogin = document.getElementById('userLogin');
        const passwordLogin = document.getElementById('passwordLogin');

        if (data.listRegister.length===0){
            if(usuario===''){ //error si no se ingresa usuario
                setMensajeUsuario('Ingrese el Usuario');
                usuarioLogin.classList.add('is-invalid');
                setUsuarioError(true);
                setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                    usuarioLogin.classList.remove('is-invalid');
                    setUsuarioError(false);
                },5000)
            }
            else if (usuario !== ''){  //error si el usuario no existe
                setMensajeUsuario('No existe el usuario');
                usuarioLogin.classList.add('is-invalid');
                setUsuarioError(true);
                setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                    usuarioLogin.classList.remove('is-invalid');
                    setUsuarioError(false);
                },3000)
                
            }
            else if(contraseña===''){ //error si no se ingresa usuario
                setMensajePassword('Ingrese la contraseña');
                passwordLogin.classList.add('is-invalid');
                setPasswordError(true);
                setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                    passwordLogin.classList.remove('is-invalid');
                    setPasswordError(false);
                },5000)
            }      
        }    
        let users = data.listRegister.find(element=>element.name===usuario.toLowerCase()) //buscar si existe el usuario
<<<<<<< HEAD
=======
        
>>>>>>> usuarios
        if (usuario===''){  //error si no se ingresa usuario
            setMensajeUsuario('Ingrese el Usuario');
            usuarioLogin.classList.add('is-invalid');
            setUsuarioError(true);
            setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                usuarioLogin.classList.remove('is-invalid');
                setUsuarioError(false);
            },5000)
                }
        else if (users ===undefined){  //error si no existe usuario
            setMensajeUsuario('No existe el usuario');
            usuarioLogin.classList.add('is-invalid');
            setUsuarioError(true);
            setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                usuarioLogin.classList.remove('is-invalid');
                setUsuarioError(false);
                setUsuario('');
                setContraseña('');
                document.getElementById('formInput').reset()                
            },3000)
        }
        else if (usuario.toLowerCase() === users.name && contraseña ===''){  //error no se ingreso contraseña
            setMensajePassword('Ingrese la contraseña');
            passwordLogin.classList.add('is-invalid');
            setPasswordError(true);
            setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                passwordLogin.classList.remove('is-invalid');
                setPasswordError(false);
            },5000)
        }
        else if (usuario.toLowerCase() === users.name && contraseña !==users.password){ //error constraseña incorrecta
            setMensajePassword('Contraseña incorrecta');
            passwordLogin.classList.add('is-invalid');
            setPasswordError(true);
            setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                passwordLogin.classList.remove('is-invalid');
                setPasswordError(false);
                setContraseña('')
                passwordLogin.value=''
            },5000)
        }
<<<<<<< HEAD
        else if (usuario.toLowerCase() === users.name && contraseña === users.password){  //usuario correcto
=======
        else if (usuario.toLowerCase()=== users.name && contraseña === users.password){  //usuario correcto
>>>>>>> usuarios
            let idUser = users.id
            let userActivo = data.listRegister.find(element=>element.id ===idUser)
            data.setUserActive(userActivo)
            data.setActiveLogin(true);    
            let usu = userActivo.name; //traer datos de usuario activo
            let dataAnterior = JSON.parse(localStorage.getItem(`usuario${usu}`));  //traer datos guardados de compras no finalizadas         
               
            if (dataAnterior !==null){   // setear los valores por usuario de los productos que estan en el carrito y no fueron comprados
               if (usu=== dataAnterior.user){
                   compras.setCartlist(dataAnterior.carrito)
                   compras.setSumarCant(dataAnterior.widget)
                   compras.setSubtotal(dataAnterior.subtotales)
               }
            }
            setUsuario('');  // reestablecer datos de input usuario
            setContraseña(''); //reestablecer datos de input password
            navegar('/')  //ir a login
        }
    }

    return(
        <section className={style.loginContainer}>    
            <div className='container text-center'>
                <div className='row'>
                    <div className={`col-md-4 offset-md-4 ${style.formContainer}`}>
                        <Link to='/'className={style.boton}><FontAwesomeIcon icon={faTimes} className={style.closeLogin}/></Link>
                        <form id='formInput'className={`${style.formData}`}>
                            <label className='form-label pb-3'>Usuario</label>
                            <input
                                className='form-control text-center'
                                type='text'placeholder='Ingrese el usuario'
                                autoComplete='off'
                                onChange={(e)=>setUsuario(e.target.value)}
                                onKeyDown={blockSpace}
                                autoFocus
                                id='userLogin'
                            />
                            { usuarioError && <p className={style.errorUsuario}>{mensajeUsuario}</p>}
                            <label className='form-label pt-4 pb-3'>Contraseña</label>
                            <input 
                                className='form-control text-center'
                                type='password'
                                placeholder='Ingrese la Contraseña'
                                onChange={(e)=>setContraseña(e.target.value)}
                                onKeyDown={blockSpace}
                                id='passwordLogin'
                            />
                            { passwordError && <p className={style.errorUsuario}>{mensajePassword}</p>}
                            <Link to='/register'style={{textDecoration:'none'}}><p className={style.linkRegistrar}>Registrarse</p></Link>
                            <Button variant='contained'className={style.buttonLogin} onClick={loginIn}>Ingresar</Button>
                        </form>              
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login