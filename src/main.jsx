import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MealInfo from './pages/Meals/Meals.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import MealIngredients from './Components/MealIngredients.jsx'
import NotFound from './pages/404/404.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='meals' element={<MealInfo />} />
          <Route path='about/:creatorName' element={<About />} />
          <Route path='meals/:idMeal' element={<MealIngredients />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
