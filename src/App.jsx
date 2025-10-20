import Footer from "./Components/Footer/Footer"
import FormSign from "./Components/Forms/FormSign"
import Home from "./Components/Home/Home"

import NavBar from "./Components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <div>
      <BrowserRouter>
      
        <NavBar />
        {/* <FormSign/> */}
        <Routes>
         
          <Route path="/" Component={Home } />
          <Route path="/about"  />
          <Route path="/contact"  />
          <Route path="/form" Component={FormSign } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
