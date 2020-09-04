import React from 'react'
import Logo from './Logo'
import Cart from './Cart'

const Header = () => {
   function changeTheme() {
      if (document.body.classList.contains('dark-theme')) {
         document.body.classList.add('light-theme')
         document.body.classList.remove('dark-theme')
         document.querySelector('.theme-button').textContent = 'dark'
      } else {
         document.body.classList.add('dark-theme')
         document.body.classList.remove('light-theme')
         document.querySelector('.theme-button').textContent = 'light'
      }
   }

   return (
      <div className='header'>
         <button className='theme-button' onClick={changeTheme} type='button'>
            Dark
         </button>
         <Logo />
         <Cart />
      </div>
   )
}

export default Header
