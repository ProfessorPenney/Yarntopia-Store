import React from 'react'
import CartImg from '../img/cart.png'

const Cart = () => {
   return (
      <div className='checkout-container'>
         <button className='snipcart-checkout' type='button'>
            <img src={CartImg} alt='Cart' />
         </button>
         <span class='snipcart-items-count'></span>
      </div>
   )
}

export default Cart
