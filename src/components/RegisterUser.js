import { useContext, useState} from 'react';
import style from '../assets/css/RegisterUser.module.css';
import {Button} from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {Link,useNavigate} from 'react-router-dom';
import { UserContext } from './UserContext';
import {Snack} from './Snack';

let userId =1;  // inicializar el ID para el registro de los usuarios

export const RegisterUser=()=>{
    const [user,setUser]=useState(''); // usuario
    const [telefono,setTelefono] = useState('');  // telefono usuario
    const [password,setPassword]=useState(''); // constraseña usuario
    const [email,setEmail]=useState(''); // Email de usuario
    const [terminos,setTerminos]=useState(false); // terminos y condiciones
    const [snack,setSnack]=useState(false); // mensaje creacion de users
    const datosUser = useContext(UserContext);
    const navigation = useNavigate();
    const [errorUsuario,setErrorUsuario]=useState(false)  //mostrar mensaje error usuario
    const [mensajeUsuario,setMensajeUsuario]=useState('');  //mensaje usuario
    const [errorEmail,setErrorEmail]=useState(false)  //mostrar mensaje error email
    const [mensajeEmail,setMensajeEmail]=useState('');  //mensaje email
    const [errorPassword,setErrorPassword]=useState(false)  //mostrar mensaje error contraseña
    const [mensajePassword,setMensajePassword]=useState('');  //mensaje contraseña
    const [errorPhone,setErrorPhone]=useState(false); //mostrar mensaje error telefono
    const [mensajePhone,setMensajePhone]=useState('');  //mensaje telefono
    const [errorTerminos,setErrorTerminos]=useState(false); //mostrar mensaje error check terminos
    const [mensajeTerminos,setMensajeTerminos]=useState('');  //mensaje terminos
    
    const comprobarNumero=(evt)=>{  //comprobar ingreso de numero de telefono(acepta solo numeros)
        if (evt.keyCode <=47 && evt.keyCode !==8) evt.preventDefault()
        else if(evt.keyCode >=58) evt.preventDefault()  
    }
    
    const ocultar =()=>{  // ocultar SnackBar
        setSnack(false);
        setTimeout(()=>{
            navigation('/mercado-shop')
        },100)
    }
    
    const blockSpace =(evt)=>{  // bloquear espacios en blanco
        if (evt.keyCode ===32) evt.preventDefault();
    }

    const validar =()=>{
        const usuarioInput = document.getElementById('txtUsuario'); //obtener input usuario
        const emailInput = document.getElementById('txtEmail'); //obtener input email
        const passwordInput = document.getElementById('txtPassword'); //obtener input password
        const phoneInput = document.getElementById('txtPhone') //obtener input phone
        const terminosInput =  document.getElementById('txtTerminos') //obtener input check Aceptar términos
        let usuarioValido =false;
        let emailValido =false;
        let contraseñaValida =false;
        let phoneValido = false;
        let terminosValidos = false;

        if(user===''){  //error nombre vacio 
            setMensajeUsuario('Ingrese el Usuario');
            usuarioInput.classList.add('is-invalid');
            setErrorUsuario(true);
            setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                usuarioInput.classList.remove('is-invalid');
                setErrorUsuario(false);
            },5000)
        }
        else if (user.length <3){  //error nombre menor a 3 caracteres
            setMensajeUsuario('EL nombre debe tener un mínimo de 3 caracteres');
            usuarioInput.classList.add('is-invalid');
            setErrorUsuario(true);
            setTimeout(()=>{  //ocultar mensaje luego de 3 segundos
                usuarioInput.classList.remove('is-invalid');
                setErrorUsuario(false);
            },5000)
        }
        else if (datosUser.listRegister.length !==0){  //error usuario existente
            let usuarioExistente = datosUser.listRegister.find(element=>element.name)
            if(user.toLowerCase()===usuarioExistente.name){
               setMensajeUsuario('El usuario ya existe');
               usuarioInput.classList.add('is-invalid');
               setErrorUsuario(true);
            }  
            else{
                usuarioValido=true  //usuario valido
            }  
            setTimeout(()=>{  //ocultar mensaje luego de 3 segundos
                usuarioInput.classList.remove('is-invalid');
                setErrorUsuario(false);
            },5000)
        }
        else{
            usuarioValido=true   // usuario valido
        }  
        if (email===''){   //error email vacio
            setMensajeEmail('Ingrese el correo');
            emailInput.classList.add('is-invalid');
            setErrorEmail(true);
            setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                emailInput.classList.remove('is-invalid');
                setErrorEmail(false);
            },5000)
        }
        else if ((email.includes('@')===false) || (email.includes('.')===false)){  //comprobar que se ingrese un formato con @ y .
            setMensajeEmail('correo no válido');
            emailInput.classList.add('is-invalid');
            setErrorEmail(true);
            setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                emailInput.classList.remove('is-invalid');
                setErrorEmail(false);
            },5000)
        }
        else if (datosUser.listRegister.length !==0){  //error email existente
            let emailExistente = datosUser.listRegister.find(element=>element.email)
            if(email.toLowerCase()===emailExistente.email){
               setMensajeEmail('El correo ya existe');
               emailInput.classList.add('is-invalid');
               setErrorEmail(true);
            }
            else{
                emailValido=true  //email valido
            }
            setTimeout(()=>{  //ocultar mensaje luego de 3 segundos
                emailInput.classList.remove('is-invalid');
                setErrorEmail(false);
            },5000)
        }    
        else{
            emailValido=true  //email valido
        } 
        if (password===''){ //error no se ingreso password
            setMensajePassword('Ingrese la contraseña');
            passwordInput.classList.add('is-invalid');
            setErrorPassword(true);
            setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                passwordInput.classList.remove('is-invalid');
                setErrorPassword(false);
            },5000)
        }
        else if (password.length < 6){  //error password menor a 6 caracteres
            setMensajePassword('mínimo 6 carácteres');
            passwordInput.classList.add('is-invalid');
            setErrorPassword(true);
            setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                passwordInput.classList.remove('is-invalid');
                setErrorPassword(false);
            },5000)   
        }
        else{
            contraseñaValida =true; //password valido
        }
        if(telefono===''){  //error input telefono vacio
            setMensajePhone('Ingrese el télefono');
            phoneInput.classList.add('is-invalid');
            setErrorPhone(true);
            setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                phoneInput.classList.remove('is-invalid');
                setErrorPhone(false);
            },5000)
        }
        else if(telefono.length <8 || telefono.length >15){
            setMensajePhone('Ingrese número entre 8 y 15 dígitos');
            phoneInput.classList.add('is-invalid');
            setErrorPhone(true);
            setTimeout(()=>{   //ocultar el mensaje luego de 3 segundos
                phoneInput.classList.remove('is-invalid');
                setErrorPhone(false);
            },5000)
        }
        else{
            phoneValido =true; //telefono valido
        }
        if(terminos === false){
            setMensajeTerminos('Aceptar términos y condiciones');
            terminosInput.classList.add('is-invalid');
            setErrorTerminos(true);
            setTimeout(()=>{  //ocultar mensaje luego de 3 segundos
                terminosInput.classList.remove('is-invalid');
                setErrorTerminos(false);
            },5000)
        }
        else{
            terminosValidos =true;
        }

        if (usuarioValido===true && emailValido===true && contraseñaValida===true && phoneValido===true && terminosValidos===true){  // si todos los campos son válidos registar usuario nuevo
            register();
        }
    }

    const register =()=>{   //registrar usuarios
        
        if(datosUser.listRegister.length===0){
            let usuario={
                id:userId,
                name:user.toLowerCase(),
                phone: telefono,
                email:email.toLowerCase(),
                password:password,
                terminos:terminos 
            }
            datosUser.setListRegister([usuario])
            localStorage.setItem('users',JSON.stringify([usuario])) //guardarlos localmente en un localStorage
            setSnack(true);
        }       
        else if(datosUser.listRegister.length >0){
            datosUser.setListRegister([...datosUser.listRegister,
                {
                    id:userId +=1,
                    name:user.toLowerCase(),
                    phone: telefono,
                    email:email,
                    password:password,
                    terminos:terminos
                }
            ]);
            setSnack(true);
        }
    }
   const aceptar =()=>{   //aceptar terminos y condiciones
       if (terminos){
           setTerminos(false)
       }
       else {
            setTerminos(true)
       }
   } 
    return(
        <section className={style.loginContainer}>    
        <div className='container text-center'>
            <div className='row'>
                <div className={`col-md-4 offset-md-4 ${style.formContainer}`}>
                <Link to='/mercado-shop'className={style.boton}><span><FontAwesomeIcon icon={faTimes} className={style.closeLogin}/></span></Link>
                {
                     snack &&  <Snack mostrar={snack}time={1000}ocultar={ocultar}text={`Usuario creado correctamente`}color={"success"}/>   
                }    
                    <form id='formRegister'className={`${style.formData}`}>
                        <label className='form-label'>Usuario</label>
                        <input
                            className='form-control text-center'
                            type='text'placeholder='Ingrese el usuario'
                            autoComplete='off'
                            onChange={(e)=>setUser(e.target.value)}
                            id='txtUsuario'
                            onKeyDown={blockSpace}
                            autoFocus
                            required
                        />
                        { errorUsuario && <p className={style.errorUsuario}>{mensajeUsuario}</p>}
                          <label className='form-label'>Email</label>
                        <input
                            className='form-control text-center'
                            type='email'placeholder='example@correo.com'
                            autoComplete='off'
                            id='txtEmail'
                            onKeyDown={blockSpace}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        { errorEmail && <p className={style.errorUsuario}>{mensajeEmail}</p>}
                        <label className='form-label'>Contraseña</label>
                        <input 
                            className='form-control text-center'
                            type='password'
                            onKeyDown={blockSpace}
                            placeholder='Ingrese la Contraseña'autoComplete='off'
                            onChange={(e)=>setPassword(e.target.value)}
                            id='txtPassword'
                        />
                        { errorPassword && <p className={style.errorUsuario}>{mensajePassword}</p>}
                         <label className='form-label'>Teléfono</label>
                        <input
                            className='form-control text-center'
                            type='text'
                            placeholder='Ej: 1122223333'
                            autoComplete='off'
                            id='txtPhone'
                            onKeyDown= {comprobarNumero}
                            onChange={(e)=>setTelefono(e.target.value)}
                        />
                        { errorPhone && <p className={style.errorUsuario}>{mensajePhone}</p>}
                        <p className={`pt-5 pb-3 ${style.labelTerminos}`}>
                            <input 
                                className='form-check-input'
                                type='checkbox'
                                value={terminos}
                                onChange={aceptar}
                                id='txtTerminos'
                            />
                        <b className='ms-2'>Acepto términos y condiciones</b></p> 
                        { errorTerminos && <p className={style.errorTerminos}>{mensajeTerminos}</p>} 
                        <Button variant='contained'className={style.buttonRegister} onClick={validar}>Registrar</Button>
                    </form>              
                </div>
            </div>
        </div>
    </section>
    )
}