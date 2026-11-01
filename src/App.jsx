import { Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'
import Team from './pages/Team'
import Reviews from './pages/Reviews'
import Mission from './pages/Mission'
import Layout from './pages/Layout'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}>
        <Route path='team' element={<Team/>}/>
        <Route path='reviews' element={<Reviews/>}/>
        <Route path='mission' element={<Mission/>}/>
      </Route>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products:productID' element={<ProductDetails/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
