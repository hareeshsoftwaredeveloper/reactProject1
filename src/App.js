import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 
// import {Component} from "react"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact" 
import Services from "./components/Services" 

import "./Styles/App.scss"
import "./Styles/header.scss"
import "./Styles/home.scss"
import "./Styles/footer.scss"
import "./Styles/contact.scss"
import "./Styles/mediaquery.scss"


function App () {
  return (
      <Router>
          <Header/>
          <Routes>
              <Route path="/" Component={Home}></Route>
              <Route path="/contact" Component={Contact}></Route>
              <Route path="/services" Component={Services}></Route>
          </Routes>
          <Footer/>
    </Router>
 )
}

export default App