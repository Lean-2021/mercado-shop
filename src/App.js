import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Footer} from './components/Footer'; 

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element ={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
