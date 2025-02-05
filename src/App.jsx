

import './App.css'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Work from '../src/components/Work'
import ContactForm from './components/ContactForm'
import SocialMediaLinks from './components/SocialMediaLinks'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <div>
        <SocialMediaLinks />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div >
      <div>
        <Work />
      </div>
      <div style={{ backgroundColor: '#1e1e2f' }}>
        <div >
          <ContactForm />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
