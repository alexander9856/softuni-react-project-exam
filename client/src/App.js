import './App.css';

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "./contexts/AuthContext";

import { login, register, logout } from './services/data'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/auth/Register/Register';
import { Login } from './components/auth/Login/Login';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { Profile } from './components/Profile/Profile';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Logout } from './components/auth/Logout';





function App() {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate()
  // const [newUser] = useState(false);
  const onLoginSubmit = async (data) => {
    try {
      const result = await login(data)
      setAuth(result)
      navigate('/')
    }
    catch (err) {
      console.log(err)
    }
  };

  const onRegisterSubmit = async (data) => {
    try {
      const result = await register(data)
      console.log(result)

      setAuth(result)
      navigate('/')
    }
    catch (err) {
      console.log(err)
    }
  };

  const onLogout = async () => {
    await logout();
    setAuth({})
  }



  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  }
  return (
    <AuthContext.Provider value={contextValues}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/create' element={<Create />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/games/details/:gameId' element={<Details />} />
        <Route path='/games/edit/:gameId' element={<Edit />} />

      </Routes>
      <main>

      </main>
      <Footer />

    </AuthContext.Provider>

  )
}

export default App;
