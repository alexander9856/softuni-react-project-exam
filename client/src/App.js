import './App.css';

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "./contexts/AuthContext";

import { login } from './services/data'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { Profile } from './components/Profile/Profile';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';





function App() {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate()
  console.log(auth)
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

  const contextValues = {
    onLoginSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken
  }
  return (
    <AuthContext.Provider value={contextValues}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
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
