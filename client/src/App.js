import './App.css';

import { Routes, Route } from 'react-router-dom'
import { Auth } from "./contexts/AuthContext";

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
  return (
    <Auth>
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

    </Auth>

  )
}

export default App;