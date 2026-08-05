import { useState } from 'react'
import './App.css'

function App() {
  const [phase, setPhase] = useState('closed') // closed, opening, showing

  const handleOpen = () => {
    if (phase !== 'closed') return
    setPhase('opening')
    setTimeout(() => setPhase('showing'), 500)
  }

  return (
    <div className="invitation">
      {phase === 'showing' && (
        <div className="invitation-content">
          <img src="/boda.png" alt="Invitación de boda" className="invitation-image" />
        </div>
      )}

      <div className={`envelope-wrapper ${phase === 'opening' ? 'opening' : ''} ${phase === 'showing' ? 'gone' : ''}`} onClick={handleOpen}>
        <div className="envelope-scene">
          <div className="envelope-back">
            <img src="/2.png" alt="Sobre" className="envelope-img" />
          </div>
          <div className="envelope-flap">
            <img src="/2.png" alt="" className="envelope-img flap-img" />
          </div>
          <div className="envelope-front">
            <img src="/2.png" alt="" className="envelope-img front-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
