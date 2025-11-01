import About from "./Components/About/About"
import Cart from "./Components/Cart/Cart"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import FormSign from "./Components/Forms/FormSign"
import Home from "./Components/Home/Home"

import NavBar from "./Components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router'
import ScrollToTop from "./ScrollToTop"



function App() {

  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <NavBar />

        
        <Routes>
         
          <Route path="/" Component={Home } />
          <Route path="/about" Component={About } />
          <Route path="/contact" Component={Contact } />
          <Route path="/form" Component={FormSign } />
          <Route path="/Cart" Component={Cart } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
