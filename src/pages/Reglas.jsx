import './Reglas.css'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import useRules from '../hooks/useRules'
import Regla from '../components/Regla'
import { ProgressBar } from 'react-bootstrap'

function Reglas() {
    const handleScroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    const [reglas, setReglas] = useState([])
    const [strength, setStrength] = useState(0)
    useEffect(() => {
        setReglas(useRules(localStorage.getItem('password') || ''))
        setStrength(localStorage.getItem('strength') || 0)
    }, [localStorage.getItem('password')])

    return (
        <main className='main-reglas'>
            <label className='no-select'><h1 className='titulo-reglas'>Lista de reglas 📜</h1></label>
            <article className='article-reglas'>
                {
                    reglas?.map((regla, index) => (
                        <Regla regla={regla} index={index} key={regla.id} valida={regla.valida} />
                    ))
                }
            </article>
            <ProgressBar className='strengthMeter-reglas no-select' max={100} min={0}
            label={`🔒 Fuerza: ${strength}%`} animated now={strength} />
            <button onClick={handleScroll} className='scroll-button text-bg no-select'>Volver arriba</button>
        </main>
    )
}

export default Reglas