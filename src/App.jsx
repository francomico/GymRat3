import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeComponent from "./Components/home/HomeComponent"
import ContactComponent from "./Components/contact/ContactComponent"
import { ProductsComponent } from "./Components/products/ProductsComponent"
import NavBar from "./Components/navigation/NavBar"
import SingleProduct from "./Components/product/SingleProduct"


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomeComponent/>}/>
          <Route exact path='/products' element={<ProductsComponent/>}/>
          <Route exact path='/product/:prodId' element={<SingleProduct/>}/>
          <Route exact path='/contact' element={<ContactComponent/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
