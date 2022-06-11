import './App.css';
import HomePage from './pages/HomePage';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrerPage from './pages/RegistrerPage';
import ProductInfo from './pages/ProductInfo';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import './stylesheets/Layout.css'
import './stylesheets/products.css'
import './stylesheets/authentication.css'
import Orders from './pages/Orders';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' exact element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
          <Route path='/productinfo/:productid' exact element={<ProtectedRoutes><ProductInfo /></ProtectedRoutes>} />
          <Route path='/cart' exact element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
          <Route path='/checkout' exact element={<ProtectedRoutes><Checkout /></ProtectedRoutes>} />
          <Route path='/orders' exact element={<ProtectedRoutes><Orders /></ProtectedRoutes>} />
          <Route path='/login' exact element={<LoginPage />} />
          <Route path='/register' exact element={<RegistrerPage />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('userlogined')) {
    return children
  }
  else {
   return <Navigate to='/login' />
  }
}
