import './index.scss';
import Cabecalho from '../../componentes/cabecalho';
import { Link } from 'react-router-dom'

export default function Inicio(){
    return(
        <div className='Pag-inicial'>
                    <Cabecalho/>
                        <div className="links">
                            <ul>
                                <li><Link to='/calculadora'>Página Calculadora</Link></li>
                                <li><Link to='/ingressos'>Página Ingressos</Link></li>
                                <li><Link to='/contador'>Página Contador</Link></li>
                                <li><Link to='/eventos'>Página 3 eventos</Link></li>
                            </ul>
                      </div>
        </div>
    )
}