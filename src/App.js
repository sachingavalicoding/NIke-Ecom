import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Product, Contact } from "./pages"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App