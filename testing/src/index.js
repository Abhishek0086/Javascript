import { createRoot } from 'react-dom/client'
import React from 'react'
import './styles.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <div className="overlay">
      <a className="https://docs.pmnd.rs/react-three-fiber/examples/showcase">
        <b>Navbar</b>
      </a>
      <a className="right" href="https://codesandbox.io/s/kmb9i">
        settings
      </a>
      {/* <h2>
        Lets 
        <br />
        give credits 
        <br />
        here —
      </h2> */}
    </div>
  </>
)
