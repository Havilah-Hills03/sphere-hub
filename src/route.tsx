import React from 'react'
import {BrowserRouter as Router, Routes ,  Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Footer } from './Section/Footer'
import { Navbar } from './components/navbar'
import { Contact } from './Section/Contact'
import { DigitalSkill } from './pages/DigitalSkill'
import { OfficeSpace } from './pages/OfficeSpace/OfficeSpace'

export const RouteLib:React.FC = () => {
  return (
   <Router>
    <Navbar />
     <Routes>
        <Route path='/' element={<HomePage />}  />
        <Route path='/digital-skill' element={<DigitalSkill />}  />
        <Route path='/office-space' element={<OfficeSpace />}  />
     </Routes>
      <Contact />
  <Footer />
   </Router>
  )
}
