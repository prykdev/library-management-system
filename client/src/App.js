
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import {Signup} from './views/Signup.page'
import {Login} from './views/Login.page'
import { Navbar } from './components/jsx components/nav';
import { Sidebar } from './components/jsx components/sidebar';
function App() {
  return (
    // <Signup></Signup>

    <BrowserRouter>
    <Routes> 
    <Route path='Signup' element={<Signup/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='navbar' element={<Navbar/>}/>
    <Route path='sidebar' element={<Sidebar/>}/>
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
