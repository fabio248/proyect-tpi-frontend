import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RequireAuth from './pages/Auth/RequireAuth';
import Logout from './pages/Auth/Logout';
import Profile from './pages/Profile';
import Clientes from './pages/Dashboard/Clientes';
import Usuarios from './pages/Dashboard/Users';
import ChangePassword from './pages/Auth/ChangePassword';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Pedidos from './pages/Dashboard/Pedidos';
import Actualizar from './pages/Auth/Actualizar';

const validateRole = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (localStorage.getItem('isLogged') !== 'true' || user.role !== 'ADMIN')
    return false;
  return true;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/cambiar-contraseña' element={<ChangePassword />}></Route>
        <Route path='/olvidar-contraseña' element={<ForgotPassword />}></Route>
        <Route
          element={
            <RequireAuth
              isLogged={localStorage.getItem('isLogged') === 'true'}
            />
          }
        >
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/dashboard-admin' element={<Dashboard />}></Route>
          <Route
            path='/dashboard-admin/clientes'
            element={
              <Dashboard>
                <Clientes />
              </Dashboard>
            }
          ></Route>
          <Route
            path='/dashboard-admin/pedidos'
            element={
              <Dashboard>
                <Pedidos />
              </Dashboard>
            }
          ></Route>
        </Route>
        <Route
          path='/dashboard-admin/usuarios'
          element={
            <RequireAuth
              isLogged={validateRole()}
              redirectTo='/dashboard-admin/clientes'
            >
              <Dashboard>
                <Usuarios />
              </Dashboard>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
