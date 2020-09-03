import React from 'react'
import { CSSTransition } from 'react-transition-group'

const ProductDetailsModal = ({ product, setshowProductModal }) => {
   function removeModal() {
      setshowProductModal(false)
   }

   return (
      <div className='modal snipcart-add-item' onClick={removeModal}>
         <CSSTransition classNames='product-modal' timeout={100} in appear>
            <div className='product-modal' key={product.id}>
               <img src={require(`../img/${product.img}.jpg`)} alt={product.title} />
               <div className='info-div'>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p className='modal-price'>${product.price.toFixed(2)}</p>
                  <button
                     className='snipcart-add-item'
                     data-item-id={product.id.toString()}
                     data-item-price={product.price}
                     data-item-url='/'
                     data-item-image={require(`../img/${product.img}.jpg`)}
                     data-item-name={product.title}>
                     Add to cart
                  </button>
               </div>
            </div>
         </CSSTransition>
      </div>
   )
}

export default ProductDetailsModal
