import React, { Component } from 'react';
import './App.css';

import Modal from './Modal.js';
// import Cart from './Cart.jsx';
// import Checkout from './Checkout.jsx';
// import Product from './Product.jsx';

const Heading = () => {
  return <h1>Nile Book Store</h1>
}


class App extends Component {
  componentWillReceiveProps(nextProps) {
    this.isModal = (nextProps.location.state &&
      nextProps.location.state.modal)
    if (this.isModal &&
      nextProps.location.key !== this.props.location.key) {
      this.previousChildren = this.props.children
    }
  }

  render() {
    // console.log('Modal: ', this.isModal)
    return (
      <div className="well">
        <Heading />
        <div>
          {(this.isModal) ? this.previousChildren : this.props.children}
          {(this.isModal) ?
            <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
              {this.props.children}
            </Modal> : ''
          }
        </div>
      </div>
    )
  }
}

export default App;
