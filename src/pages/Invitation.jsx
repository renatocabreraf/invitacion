import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import guests from '../data/guests'
import './Invitation.css'

function Invitation() {
  const { slug } = useParams()
  const guest = guests.find(g => g.slug === slug)
  const [phase, setPhase] = useState('closed')

  useEffect(() => {
    document.title = guest ? `Invitación - ${guest.name}` : 'Invitación de Boda'
  }, [guest])

  if (!guest) {
    return <div className="not-found">Invitación no encontrada</div>
  }

  const handleOpen = () => {
    if (phase !== 'closed') return
    setPhase('opening')
    setTimeout(() => {
      window.open('https://cabreraguevara.my.canva.site', '_self')
    }, 1000)
  }

  return (
    <div className="invitation-page">
      <div className={`envelope-section ${phase === 'opening' ? 'opening' : ''}`}>
        <div className="guest-info">
          <h1 className="guest-name">{guest.name}</h1>
          <p className="guest-count">
            {guest.guests === 1 ? '1 asistente confirmado' : `${guest.guests} asistentes confirmados`}
          </p>
        </div>

        <div className="envelope-wrapper" onClick={handleOpen}>
          <div className="envelope-scene">
            <img src="./SobreEntrada.png" alt="Sobre" className="envelope-img" />
            <div className="envelope-flap">
              <img src="./SobreEntrada.png" alt="" className="flap-img" />
            </div>
          </div>
          <p className="tap-text">Toca para abrir</p>
        </div>
      </div>
    </div>
  )
}

export default Invitation
