import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';

const Contact = () => {

  return (
    <>
    <Helmet>
        <title>Contact Us</title>
        <meta name='description' content='Contact Us Page Description'></meta>
    </Helmet>
    <Navbar></Navbar>
    <div>Contact Page</div>
    </>
  )
}

export default Contact