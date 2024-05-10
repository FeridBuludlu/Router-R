import React from 'react'
import Footer from '../../layout/site/Footer/Footer'
import Header from '../../layout/site/Header/Header'
import { Outlet } from 'react-router'

const SiteRoot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet />
        <Footer/>
    </React.Fragment>
  )
}

export default SiteRoot