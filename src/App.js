import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Product from "./pages/Product/Product"
import Check from './pages/Product/Check'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Contact />
      <Footer />
    </>
  )
}

export default App