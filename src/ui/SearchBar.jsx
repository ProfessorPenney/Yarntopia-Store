import React from 'react'

const SearchBar = ({ settotalInv, setvisibleInv, inventory, setshowProductTransition }) => {
   const search = query => {
      setshowProductTransition(false)
      const productMatches = inventory.filter(product => {
         return product.search.some(searchTerm =>
            searchTerm.toLowerCase().includes(query.toLowerCase())
         )
      })
      settotalInv(productMatches)
      setvisibleInv(productMatches.slice(0, 12))
   }

   return (
      <div className='searchbar-container'>
         <input
            type='text'
            placeholder='Search (ex. cute, ugly, animal, red, clothing)'
            onChange={e => search(e.target.value)}
         />
      </div>
   )
}

export default SearchBar
