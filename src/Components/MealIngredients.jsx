import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MealIngredients.css'

const MealIngredients = () => {
  const { idMeal } = useParams()
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        )
        const data = await response.json()

        if (data.meals && data.meals.length > 0) {
          setIngredients(data.meals[0])
        } else {
          console.error(
            'No se encontró información de ingredientes para la comida seleccionada'
          )
        }
      } catch (error) {
        console.error(`Error en la solicitud de ingredientes: ${error}`)
      }
    }

    fetchIngredients()
  }, [idMeal])

  return (
    <div className='ingredients'>
      <h2>{ingredients.strMeal}</h2>
      <p>Ingredients:</p>
      <ul>
        {Array.from({ length: 20 }, (_, i) => i + 1)
          .filter((index) => ingredients[`strIngredient${index}`])
          .map((index) => (
            <li key={index}>
              {ingredients[`strIngredient${index}`] &&
                `${ingredients[`strIngredient${index}`]} - `}
              {ingredients[`strMeasure${index}`]}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default MealIngredients
