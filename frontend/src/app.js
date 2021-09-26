import React from 'react'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import LkStats from './components/LkStats'


const App = () =>{
  return (
    <div className='container-fluid'>
      <Header />
      <LkStats />
      <Footer />
    </div>
  )
}

export default App
