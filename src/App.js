import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {Routes, Route, HashRouter} from 'react-router-dom';
import {Footer} from './components/Footer'; 
import { Cart } from './components/Cart';
import CartContextProvider from './components/CartContext';
import SearchContextProvider from './components/SearchContext';
import SearchContainer from './components/SearchContainer';
import Login from './components/Login'; 
import { RegisterUser } from './components/RegisterUser';
import UserContextProvider from './components/UserContext';
import PrivateRoute from './components/PrivateRoute';
import Error404 from './pages/Error404';

function App() {

  return (
    <UserContextProvider>  
      <SearchContextProvider>  
        <CartContextProvider>  
          <HashRouter>
            <NavBar/>
            <Routes>
              <Route path='/mercado-shop' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element ={<ItemDetailContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route element={<PrivateRoute/>}>
                <Route path='/cart'element={<Cart/>}/>
              </Route>
              <Route path='/search/:searchId'element={<SearchContainer/>}/>
              <Route path='/login'element={<Login/>}/>
              <Route path='/register' element={<RegisterUser/>}/>
              <Route path='*'element={<Error404/>}/>
            </Routes>
            <Footer/>
          </HashRouter>
        </CartContextProvider>
      </SearchContextProvider>
    </UserContextProvider>
  );
}

export default App;
