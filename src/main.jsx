import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
