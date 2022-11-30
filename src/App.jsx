import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RequireAuth from './pages/Auth/RequireAuth';
import Logout from './pages/Auth/Logout';
import Pedido from './pages/Dashboard/Pedido';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/pedidos' element={<Pedido />}></Route>
        <Route
          element={
            <RequireAuth
              isLogged={localStorage.getItem('isLogged') === 'true'}
            />
          }
        >
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/dashboard-admin' element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
