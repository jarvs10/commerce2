import { Route, Routes } from 'react-router-dom';
import Carrito from './Checkout';
import Home from './Home';
import Login from './Login';
import PageNotFound from './PageNotFound';
import Products from './Products';
import Profile from './Profile';
import Signup from './Singup';

const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Singup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Checkout' element={<Carrito />} />
        <Route path='/products/:idShop' element={<Products />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Navigation