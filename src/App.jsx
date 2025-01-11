

import './App.css'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Work from '../src/components/Work'
import ContactForm from './components/ContactForm'
import SocialMediaLinks from './components/SocialMediaLinks'
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
        {/* <Contackme /> */}
        <div >
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default App
