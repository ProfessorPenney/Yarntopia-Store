import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './ui/Header'
import Footer from './ui/Footer'
import ProductGrid from './components/ProductGrid'
import SearchBar from './ui/SearchBar'
import ProductDetailsModal from './components/ProductDetailsModal'
import initialInventory from './data/inventory'

function App() {
   const [totalInv, settotalInv] = useState(initialInventory)
   const [visibleInv, setvisibleInv] = useState(totalInv.slice(0, 12))
   const [showProductModal, setshowProductModal] = useState(false)
   const [modalProduct, setmodalProduct] = useState({})
   const [showProductTransition, setshowProductTransition] = useState(false)
   const [isLoading, setisLoading] = useState(false)

   useEffect(() => {
      document.body.classList.add('light-theme')
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   })

   function handleScroll() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
         document.querySelector('.logo').classList.add('animate-logo')
         document.querySelector('.header').classList.add('animate-header')
         document.querySelector('.searchbar-container').classList.add('animate-search')
         document.querySelector('.logo-t').classList.add('animate-t-img')
         document.querySelector('.t').classList.add('animate-t')
         document.querySelector('.searchbar-container input').classList.add('animate-search-input')
      } else {
         document.querySelector('.logo').classList.remove('animate-logo')
         document.querySelector('.header').classList.remove('animate-header')
         document.querySelector('.searchbar-container').classList.remove('animate-search')
         document.querySelector('.logo-t').classList.remove('animate-t-img')
         document.querySelector('.t').classList.remove('animate-t')
         document.querySelector('.searchbar-container input').classList.add('animate-search-input')
      }
      if (
         window.innerHeight + Math.round(document.documentElement.scrollTop) <=
            document.documentElement.offsetHeight - 300 ||
         visibleInv.length === totalInv.length
      ) {
         return
      }
      setisLoading(true)
   }

   return (
      <React.Fragment>
         <div className='App'>
            <Header />
            <div className='container'>
               <SearchBar
                  settotalInv={settotalInv}
                  setvisibleInv={setvisibleInv}
                  inventory={initialInventory}
                  setshowProductTransition={setshowProductTransition}
               />
               <ProductGrid
                  visibleInv={visibleInv}
                  totalInv={totalInv}
                  setvisibleInv={setvisibleInv}
                  setshowProductModal={setshowProductModal}
                  setmodalProduct={setmodalProduct}
                  showProductTransition={showProductTransition}
                  setshowProductTransition={setshowProductTransition}
                  isLoading={isLoading}
                  setisLoading={setisLoading}
               />
               {showProductModal && (
                  <ProductDetailsModal
                     product={modalProduct}
                     setshowProductModal={setshowProductModal}
                  />
               )}
            </div>
         </div>
         <Footer />
      </React.Fragment>
   )
}

export default App
