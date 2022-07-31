import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from './Container';
import AppBar from './AppBar';
import Loader from './Loader';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import authOperation from '../redux/authAPI/auth-operation';
import authSelectors from '../redux/authAPI/auth-selectors';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

export default function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute path="/">
                    <Home />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="/register"
                element={
                  <PublicRoute
                    path="/register"
                    redirectTo="/contacts"
                    restricted
                  >
                    <Register />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <PublicRoute path="/login" redirectTo="/contacts" restricted>
                    <Login />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="/contacts"
                element={
                  <PrivateRoute path="/contacts" redirectTo="/login">
                    <Contacts />
                  </PrivateRoute>
                }
              ></Route>
              <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
}
