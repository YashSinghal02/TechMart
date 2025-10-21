import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
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
        {/* <About/> */}
        
        <Routes>
         
          <Route path="/" Component={Home } />
          <Route path="/about" Component={About } />
          <Route path="/contact" Component={Contact } />
          <Route path="/form" Component={FormSign } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
