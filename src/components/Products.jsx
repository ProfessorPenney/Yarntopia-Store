import React from 'react'
import { CSSTransition } from 'react-transition-group'

const Products = ({ product, setshowProductModal, setmodalProduct, showProductTransition }) => {
   function showDetails() {
      setmodalProduct(product)
      setshowProductModal(true)
   }

   return (
      <CSSTransition classNames='grid-item' timeout={500} in={showProductTransition} appear>
         <div className='products' onClick={showDetails}>
            <img src={require(`../img/${product.img}.jpg`)} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
         </div>
      </CSSTransition>
   )
}

export default Products
