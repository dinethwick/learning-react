import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(true)}>
        {hasLiked ? 'Liked': 'Like'}
      </button>
    </div>
  )
}

const App = () => {
  

  return(
    <div className="card-container">
      <h2>Functional arrow component</h2>

      <Card title="Bladerunnner" rating={9} 
        isCool={true} />
      <Card title="Avatar"/>
      <Card title="The Lion King"/>

    </div>
  )
}
export default App
