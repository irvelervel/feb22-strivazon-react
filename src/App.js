import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CartIndicator from './components/CartIndicator'
import BookStore from './components/BookStore'
import Cart from './components/Cart'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react'

const App = () => {
  // remember the 2 rules of hooks:
  // 1) we need to be in a react functional component
  // 2) place your hooks at the top level of the component, outside of every
  // loop, function, condition and before the return statement

  const [cart, setCart] = useState([])

  const addToCart = (newBook) => {
    setCart([...cart, newBook])
    // let newCart = [...cart]
    // newCart.push(newBook)
    // setCart(newCart)
  }

  const removeFromCart = (index) => {
    // let newCart = cart.filter((element, i) => i !== index)
    // newCart is retaining all the elements that have an id DIFFERENT from the one you're invoking the function with!
    // the slice method: selecting two slices without the elementin the middle and re-joining them afterwards

    let firstSlice = cart.slice(0, index)
    let secondSlice = cart.slice(index + 1)
    let newCart = [...firstSlice, ...secondSlice]
    setCart(newCart)
    // setCart([...cart.slice(0, index), ...cart.slice(index + 1)])
    // HARDCORE!
  }

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col sm={12} className="text-center background-div">
            <Link to="/">
              <h1>Strivazon Book Store</h1>
            </Link>
          </Col>
          <CartIndicator cartLength={cart.length} />
        </Row>
        <hr />
        <Routes>
          <Route path="/" element={<BookStore addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
