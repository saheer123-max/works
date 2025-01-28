import React from 'react'
import{BrowserRouter,Routes,Route,Link} from "react-router-dom"

import Form from './Header/Form';
import Nave from './Header/Nave';
import Rout from './General/Rout';
import Men from './General/Men';
import Women from './General/Women';
import Home from './General/Home';
import GlobalProvider from './Context/GlobalProvider';
import Trend from './General/Trend';
import ProductDetails from './General/ProductDetails';
import Login from './General/Login';
function App() {
  return (
   <BrowserRouter>
   <GlobalProvider>
 
<Nave/>
{/* <Rout/> */}
<Routes>
  <Route path='/' element={<Home/>}/>
<Route path='/Form' element={<Form/>}/>
<Route path='/login' element={<Login/>}/>
<Route path="/men" element={<Men />} />
<Route path="/women" element={<Women/>} />
<Route path="/brand" element={<Trend/>} />
<Route path="/men/:id" element={<ProductDetails/>} />
<Route path="/brand/:id" element={<ProductDetails/>} />
  </Routes>    
  
  </GlobalProvider>
   </BrowserRouter>
  )
}

export default App

