import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Product from './Pages/Home/Product/Product';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Notfound from './Pages/Notfound/Notfound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/products' element={<Product></Product>}></Route>
        <Route path='/products/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  );
}

export default App;
