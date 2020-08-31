import React from 'react'

const Products = ({ product }) => {
   return (
      <div className='products'>
         <img src={require(`../img/${product.img}.jpg`)} alt={product.title} />
         <h3>{product.title}</h3>
         <p>${product.price.toFixed(2)}</p>
      </div>
   )
}

export default Products
