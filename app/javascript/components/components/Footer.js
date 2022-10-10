import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://github.com/orgs/JJLC-Corporation/repositories' className='footer-developers'>
      ©  {new Date().getFullYear()} JJLC Corporation
      </a>
    </div>
  )
}

export default Footer