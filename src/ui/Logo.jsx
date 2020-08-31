import React from 'react'

const Logo = () => {
   return (
      <div className='logo'>
         <span className='y'>Y</span>
         <span className='a1'>A</span>
         <span className='r'>R</span>
         <span className='n'>N</span>
         <span className='t'>
            <img src={require(`../img/t.png`)} alt='T' />
         </span>
         <span className='o'>o</span>
         <span className='p'>p</span>
         <span className='i'>i</span>
         <span className='a2'>a</span>
      </div>
   )
}

export default Logo
