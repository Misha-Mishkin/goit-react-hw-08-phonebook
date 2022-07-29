import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from './Container';
import AppBar from './AppBar';
import Loader from './Loader';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
