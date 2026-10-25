import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contador(){
    const [contador, setContador] = useState(0)

    return(
        <div className="page-contador">
            <h2>Contador: {contador}</h2>

                <button onClick={() => setContador(contador + 1)}>
                    Adicionar
                </button>
                <button onClick={() => setContador(contador - 1)}>
                    Retirar
                </button>
                <button onClick={() => setContador(0)}>
                    Voltar ao inicio
                </button>

                <Link to="/" className="voltar">← Voltar para a página inicial</Link>

        </div>
    )
}