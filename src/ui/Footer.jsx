import React from 'react'

const Footer = () => {
   return (
      <div className='footer'>
         <p>
            This is not a real store. It's just a fun project. Don't try too hard to buy anything!
         </p>
         <p>Copyright &copy; {new Date().getFullYear()} Kevin Penney. All Rights Reserved</p>
         <p>Questions and suggestions are welcome! kevin@penneyprojects.com</p>
         <br />
         <p>
            Icons made by{' '}
            <a style={anchorStyle} href='https://smashicons.com/' title='Smashicons'>
               Smashicons{' '}
            </a>
            and{' '}
            <a
               style={anchorStyle}
               href='https://www.flaticon.com/authors/prosymbols'
               title='Prosymbols'>
               Prosymbols{' '}
            </a>
            from{' '}
            <a style={anchorStyle} href='https://www.flaticon.com/' title='Flaticon'>
               www.flaticon.com
            </a>
         </p>
      </div>
   )
}

const anchorStyle = {
   textDecoration: 'none',
   color: 'inherit'
}

export default Footer
