import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Learnmore from './components/Learnmore'
import Slider from './components/Slider'
import Video from './components/Video'
import Start from './components/Start'
import Products from './components/Products'
import Review from './components/Review'
import Footer from './components/Footer'

import Homepage from './pages/Homepage/Homepage'
import Aboutus from './pages/About/Aboutus'
import Services from './pages/Services/Services'
import Projects from './pages/Projects/Projects'

import './App.css'
import ContactUs from './components/ContactUs'
import Title from './components/Title'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          className='App'
          path='/'
          element={
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }>
          {/* <Navbar />
          <Homepage /> */}
          {/* <Banner />
        <About />
        <Slider />
        <Learnmore />
        <Video />
        <Services />
        <Start />
        <Products />
        <Review /> */}
          {/* <Footer /> */}
        </Route>
        <Route
          path='/about-us'
          element={
            <>
              <Navbar />
              <Aboutus />
              <Footer />
            </>
          }>
        </Route>
        <Route
          path='/services'
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }>
        </Route>
        <Route
          path='/projects'
          element={
            <>
              <Navbar />
              <Projects />
              <Footer />
            </>
          }>
        </Route>
        <Route
          path='/contact-us'
          element={
            <>
              <Navbar />
              <Title />
              <ContactUs />
              <Footer />
            </>
          }>
        </Route>
        {/* <Route
          path='/pages'
          element={
            <>
              <Navbar />
              <Footer />
            </>
          }>
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}
