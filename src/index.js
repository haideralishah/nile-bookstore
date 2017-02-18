import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  hashHistory,
  Router,
  Route,
  IndexRoute,
  Link
} from 'react-router';

// import Modal from './Modal.jsx';
import Cart from './Cart.js';
import Checkout from './Checkout.js';
import Product from './Product.js';


const PRODUCTS = [
  { id: 0, src: 'http://proexpressjs.com/images/cover.jpg', title: 'Pro Express.js', url: 'http://proexpressjs.com/images/cover.jpg' },
  { id: 1, src: 'https://images-na.ssl-images-amazon.com/images/I/41pINoeZygL._SX404_BO1,204,203,200_.jpg', title: 'Practical Node.js', url: 'https://images-na.ssl-images-amazon.com/images/I/41pINoeZygL._SX404_BO1,204,203,200_.jpg' },
  { id: 2, src: 'https://images-na.ssl-images-amazon.com/images/I/51osBkkAboL._SX331_BO1,204,203,200_.jpg', title: 'Express API Reference', url: 'https://images-na.ssl-images-amazon.com/images/I/51osBkkAboL._SX331_BO1,204,203,200_.jpg' },
  { id: 3, src: 'https://i.imgur.com/XRCvZLl.jpg', title: 'React Up and Running', url: 'https://i.imgur.com/XRCvZLl.jpg' },
  { id: 4, src: 'https://images-na.ssl-images-amazon.com/images/I/41judrN5cwL._SX328_BO1,204,203,200_.jpg', title: 'Full Stack JavaScript', url: 'https://images-na.ssl-images-amazon.com/images/I/41judrN5cwL._SX328_BO1,204,203,200_.jpg' }
]

const Copy = () => {
  return (
    <p>Please click on a book to view details in a modal. You can copy/paste the link of
        the modal. The link will open book on a separate page.</p>
  )
}

let cartItems = {}
const addToCart = (id) => {
  if (cartItems[id])
    cartItems[id] += 1
  else
    cartItems[id] = 1
}

class Index extends Component {
  render() {
    return (
      <div>
        <Copy />
        <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
        <div>
          {PRODUCTS.map(picture => (
            <Link key={picture.id}
              to={{
                pathname: `/products/${picture.id}`,
                state: {
                  modal: true,
                  returnTo: this.props.location.pathname
                }
              }
              }>
              <img style={{ margin: 10 }} src={picture.src} height="100" alt={picture.title} />
            </Link>
          ))}
        </div>
      </div >
    )
  }
}


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/products/:id" component={Product}
        addToCart={addToCart}
        products={PRODUCTS} />
      <Route path="/cart" component={Cart}
        cartItems={cartItems} products={PRODUCTS} />
    </Route>
    <Route path="/checkout" component={Checkout}
      cartItems={cartItems} products={PRODUCTS} />
  </Router>,
  document.getElementById('root')
);
