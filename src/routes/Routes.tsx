import React from 'react';
import {
  Routes,
  Route,
  HashRouter
} from 'react-router-dom';
import App from '../App';
import SignIn from '../pages/SignIn';
import ProtectedRoute from './ProtectedRoute';
import { useAppSelector } from '../store/store';
import Inventory from '../pages/Inventory';

const DestinyLayout = () => {
  return (
    <div>
      CONTENT
    </div>
  );
};

const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  return (
    <HashRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="login" element={<SignIn/>}/>
          <Route path="inventory" element={<Inventory/>}/>
          <Route
            path="/"
            element={
              <ProtectedRoute redirectTo="/login" condition={isAuth}>
                <DestinyLayout/>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<div>NOT FOUND</div>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
