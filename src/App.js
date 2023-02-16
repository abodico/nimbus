import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import './App.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AboutMe from './pages/aboutMe/AboutMe';
import FAQ from './pages/faq/FAQ';
import Services from './pages/services/Services';
import OurTeam from './pages/our team/OurTeam';
import Skills from './pages/skills/Skills';
import Blog from './pages/blog/Blog';
import PortfolioGrid from './pages/portfolioGrid/PortfolioGrid';
import PortfolioMasonry from './pages/portfolioMasonry/PortfolioMasonry';
import Shop from './pages/shop/Shop';
import ShoppingCartProvider from './pages/shop/ShoppingCartContext';
import Cart from './pages/cart/Cart';
import Contacts from './pages/contacts/Contacts';
const App = () => {
  return (
    <ShoppingCartProvider>
    <div >
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about-me' element={<AboutMe/>}></Route>
            <Route path='/faq' element={<FAQ/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/our-team' element={<OurTeam/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/portfolio-grid' element={<PortfolioGrid/>}></Route>
            <Route path='/portfolio-masonry' element={<PortfolioMasonry/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/contacts' element={<Contacts/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </ShoppingCartProvider>
  )
}
export default App