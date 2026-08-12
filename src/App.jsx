import { HashRouter, Routes, Route } from 'react-router-dom'
import Invitation from './pages/Invitation'
import guests from './data/guests'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        {guests.map(guest => (
          <Route
            key={guest.slug}
            path={`/${guest.slug}`}
            element={<Invitation />}
          />
        ))}
        <Route path="*" element={
          <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Georgia, serif',
            color: '#8b7355'
          }}>
            Invitación no encontrada
          </div>
        } />
      </Routes>
    </HashRouter>
  )
}

export default App
