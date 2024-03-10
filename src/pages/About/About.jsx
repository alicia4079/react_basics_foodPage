import './About.css'
import { useParams } from 'react-router-dom'

import React from 'react'

const About = () => {
  const { creatorName } = useParams()
  return (
    <div className='about'>
      <h2>About us</h2>
      <p>
        Welcome to website of {creatorName} ! We are passionate about exploring
        and sharing delicious meals from around the world. Our mission is to
        bring the diverse flavors of different cuisines to your table, providing
        you with a culinary journey like no other.
      </p>

      <p>
        Discover a wide variety of recipes, each telling a unique story and
        reflecting the rich cultural heritage of its origin. Whether you're a
        seasoned chef or a cooking enthusiast, our collection of meals from
        various countries is sure to inspire your next culinary adventure.
      </p>

      <p>
        Join us in celebrating the joy of cooking and the beauty of
        international flavors. Let's embark on a delicious journey together!
      </p>
    </div>
  )
}

export default About
