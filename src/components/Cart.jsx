import Button from 'react-bootstrap/Button'
import { FaTrash } from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'

// ({ cart = [] })
// [] is the default value of cart when cart is undefined!
// since cart is always going to be present now and initially it gets an empty
// array as the value, we don't need the default value anymore

const Cart = ({ cart, removeFromCart }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: 'none' }}>
        {cart.map((book, i) => (
          <li key={i} className="my-4">
            <Button
              variant="danger"
              onClick={() => {
                removeFromCart(book.id)
              }}
            >
              <FaTrash />
            </Button>
            <img
              className="book-cover-small"
              src={book.imageUrl}
              alt="book selected"
            />
            {book.title}
          </li>
        ))}
      </ul>
    </Col>
    <Row>
      <Col sm={12} className="font-weight-bold">
        TOTAL:{' '}
        {cart.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.price),
          0
        )}
      </Col>
    </Row>
  </Row>
)

export default Cart
