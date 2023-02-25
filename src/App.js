import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import AboutMe from './pages/aboutMe/AboutMe';
// import FAQ from './pages/faq/FAQ';
// import Services from './pages/services/Services';
// import Skills from './pages/skills/Skills';
// import OurTeam from './pages/our team/OurTeam';
// import Blog from './pages/blog/Blog';
// import PortfolioGrid from './pages/portfolioGrid/PortfolioGrid';
// import PortfolioMasonry from './pages/portfolioMasonry/PortfolioMasonry';
// import Shop from './pages/shop/Shop';
// import Cart from './pages/cart/Cart';
// import Contacts from './pages/contacts/Contacts';
import ShoppingCartProvider from './pages/shop/ShoppingCartContext';

const LazyAboutMe = React.lazy(() => import('./pages/aboutMe/AboutMe'));
const LazyFAQ = React.lazy(() => import('./pages/faq/FAQ'));
const LazyServices = React.lazy(()=> import('./pages/services/Services'))
const LazySkills = React.lazy(() => import('./pages/skills/Skills'));
const LazyOurTeam = React.lazy(() => import('./pages/our team/OurTeam'));
const LazyBlog = React.lazy(() => import('./pages/blog/Blog'));
const LazyPortfolioGrid = React.lazy(() => import('./pages/portfolioGrid/PortfolioGrid'));
const LazyPortfolioMasonry = React.lazy(() => import('./pages/portfolioMasonry/PortfolioMasonry'));
const LazyShop = React.lazy(() => import('./pages/shop/Shop'));
const LazyCart = React.lazy(() => import('./pages/cart/Cart'));
const LazyContacts = React.lazy(() => import('./pages/contacts/Contacts'));
const App = () => {
  return (
    <ShoppingCartProvider>
      <div >
        <BrowserRouter>
          <div>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about-me' element={
                <React.Suspense fallback="Loading..." >
                  <LazyAboutMe />
                </React.Suspense>
              }></Route>
              <Route path='/faq' element={
                <React.Suspense fallback="Loading..." >
                  <LazyFAQ />
                </React.Suspense>
              }></Route>
              <Route path='/services' element={
                <React.Suspense fallback="Loading..." >
                  <LazyServices />
                </React.Suspense>
              }></Route>
              <Route path='/skills' element={
                <React.Suspense fallback="Loading..." >
                  <LazySkills />
                </React.Suspense>
              }></Route>
              <Route path='/our-team' element={
                <React.Suspense fallback="Loading..." >
                  <LazyOurTeam />
                </React.Suspense>
              }></Route>
              <Route path='/blog' element={
                <React.Suspense fallback="Loading..." >
                  <LazyBlog />
                </React.Suspense>
              }></Route>
              <Route path='/portfolio-grid' element={
                <React.Suspense fallback="Loading..." >
                  <LazyPortfolioGrid />
                </React.Suspense>
              }></Route>
              <Route path='/portfolio-masonry' element={
                <React.Suspense fallback="Loading..." >
                  <LazyPortfolioMasonry />
                </React.Suspense>
              }></Route>
              <Route path='/shop' element={
                <React.Suspense fallback="Loading..." >
                  <LazyShop />
                </React.Suspense>
              }></Route>
              <Route path='/cart' element={
                <React.Suspense fallback="Loading..." >
                  <LazyCart />
                </React.Suspense>
              }></Route>
              <Route path='/contacts' element={
                <React.Suspense fallback="Loading..." >
                  <LazyContacts />
                </React.Suspense>
              }></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ShoppingCartProvider>
  )
};
export default App