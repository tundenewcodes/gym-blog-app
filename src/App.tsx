
import Navbar from '@/pages/Navbar'
import Home from '@/pages/Home'
import Benefits from '@/pages/Benefits'
import { useEffect, useState } from 'react'
import { SelectedLink } from './constants/appTypes'

import OurClasses from './pages/OurClasses'
import ContactUs from './pages/contactus'
import Footer from './pages/footer'
import usePageSetup from './hooks/usePageSetup'



function App() {
const {selectedPage, setSelectedPage, isTopOfPage} = usePageSetup()
 

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App
