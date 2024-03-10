import React, { useEffect, useState } from 'react'
import './Meals.css'
import { Link } from 'react-router-dom'

const MealInfo = () => {
  const [meals, setMeals] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('chicken')

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/categories.php'
        )
        const data = await response.json()

        if (data.categories && data.categories.length > 0) {
          setCategories(data.categories)
        } else {
          console.error('No se encontró información de categorías')
        }
      } catch (error) {
        console.error(`Error en la solicitud de categorías: ${error}`)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        )
        const data = await response.json()

        console.log(data)

        if (data.meals && data.meals.length > 0) {
          setMeals(data.meals)
        } else {
          console.error(
            'No se encontró información de comidas para la categoría seleccionada'
          )
        }
      } catch (error) {
        console.error(`Error en la solicitud de comidas: ${error}`)
      }
    }

    if (selectedCategory) {
      fetchMealsByCategory()
    }
  }, [selectedCategory])

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  return (
    <div className='select'>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value=''>Select your option</option>
        {categories.map((category) => (
          <option key={category.strCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>

      <div className='divMeal'>
        {meals.map((meal) => (
          <div className='meal' key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <Link to={`/meals/${meal.idMeal}`}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MealInfo
