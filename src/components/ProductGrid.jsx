import React, { useEffect } from 'react'
import Products from './Products'

const ProductGrid = ({
   visibleInv,
   totalInv,
   setvisibleInv,
   setshowProductModal,
   setmodalProduct,
   showProductTransition,
   setshowProductTransition,
   isLoading,
   setisLoading
}) => {
   useEffect(() => {
      if (!isLoading) return
      setshowProductTransition(true)
      const length = visibleInv.length
      setvisibleInv([
         ...visibleInv,
         ...totalInv.slice(length, length + 12 <= totalInv.length ? length + 12 : totalInv.length)
      ])
      setisLoading(false)
   }, [isLoading, setvisibleInv, totalInv, visibleInv, setshowProductTransition, setisLoading])

   return visibleInv.length === 0 ? (
      <h2 className='no-results'>No Results</h2>
   ) : (
      <div className='product-grid'>
         {visibleInv.map(product => (
            <Products
               key={product.id}
               product={product}
               setshowProductModal={setshowProductModal}
               setmodalProduct={setmodalProduct}
               showProductTransition={showProductTransition}
            />
         ))}
      </div>
   )
}

export default ProductGrid
