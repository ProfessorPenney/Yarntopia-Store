import React, { useState, useEffect } from 'react'
import Products from './Products'

const ProductGrid = ({ visibleInv, totalInv, setvisibleInv }) => {
   const [isLoading, setisLoading] = useState(false)

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   })

   useEffect(() => {
      if (!isLoading) return
      const length = visibleInv.length
      setvisibleInv([
         ...visibleInv,
         ...totalInv.slice(length, length + 6 <= totalInv.length ? length + 6 : totalInv.length)
      ])
      setisLoading(false)
   }, [isLoading, setvisibleInv, totalInv, visibleInv])

   function handleScroll() {
      if (
         window.innerHeight + Math.round(document.documentElement.scrollTop) <=
            document.documentElement.offsetHeight - 50 ||
         visibleInv.length === totalInv.length
      ) {
         return
      }
      setisLoading(true)
   }

   return visibleInv.length === 0 ? (
      <h2 className='no-results'>No Results</h2>
   ) : (
      <div className='productGrid'>
         {visibleInv.map(product => (
            <Products key={product.id} product={product} />
         ))}
         {isLoading && <p style={{ marginTop: '50px' }}>Loading more items...</p>}
      </div>
   )
}

export default ProductGrid
