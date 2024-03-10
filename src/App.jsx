import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header>
        <nav>
          <NavLink to=''>Home🏚️</NavLink>
          <NavLink to='meals'>Meals🥗</NavLink>
          <NavLink to='about/World Flavors'>About🧾</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Created by Alicia Gálvez</footer>
    </div>
  )
}

export default App
