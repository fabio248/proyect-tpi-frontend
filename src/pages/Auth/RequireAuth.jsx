import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth({ isLogged, children, redirectTo = '/login' }) {
  if (!isLogged) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
}

export default RequireAuth;
