import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ComponentPage from './pages/ComponentPage'
import Installation from './pages/Installation'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/components/:componentName" element={<ComponentPage />} />
      </Routes>
    </Layout>
  )
}

export default App