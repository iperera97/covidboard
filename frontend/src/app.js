import React from 'react'
import './app.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import LkStats from './components/LkStats'


const App = () =>{
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <LkStats />
      </div>
      <Footer />
    </div>
  )
}

export default App
