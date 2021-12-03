
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import {Signup} from './views/Signup/Signup.page'
import {Login} from './views/login/Login.page'
function App() {
  return (
    // <Signup></Signup>

    <BrowserRouter>
    <Routes> 
    <Route path='Signup' element={<Signup/>}/>
    <Route path='Login' element={<Login/>}/>
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
