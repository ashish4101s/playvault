import React from 'react'

const Footer = () => {
  let footerStyle={
    position:"relative",
    top:"70vh",
    width:"100%"
  }
  return (
    <div className='bg-dark text-light py-3'>
      <p className='text-center'>copyright &copy; MyReactWebsite.com</p>
    </div>
  )
}

export default Footer

