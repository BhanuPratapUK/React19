import { Component, useState } from 'react'
import Navigation from './Components/Navigation/Navigation.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactForm from './Components/ContactForm/ContactForm.jsx'
import ContactHeader from './Components/ContactHeader/ContactHeader.jsx'

function App() {
  return (
    <>
    <Navigation />
    <ContactHeader />
    <ContactForm />
    
    </>  
)
}

export default App
