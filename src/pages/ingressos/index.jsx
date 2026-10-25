import { Link } from 'react-router-dom';
import './index.scss'
import { useState } from 'react'

const VALOR_INGRESSO = 30;

export default function Ingressos(){
const [qntd, setQntd] = useState("");
const [meia, setMeia] = useState(false);
const [total, setTotal] = useState("");
const [cupom, setCupom] = useState("");

function final(){

    let valor = qntd * VALOR_INGRESSO

    if(meia == true){
        valor = valor / 2;
    }
    if(cupom === 'QUERO50'){
        valor = valor * 0.5;
    }
    else if(cupom === 'QUERO30'){
        valor = valor * 0.3;
    }
    else if(cupom === 'QUERO10'){
        valor = valor * 0.1;
    }
    setTotal(valor)
}


    return(
        <div className='page-ingressos'>
            <section>
                <h1>Venda de ingressos:</h1>

                <div className='i'>
                <label>Quantidade de ingressos</label>
                <input type='text' value={qntd} onChange={(e)=>setQntd(e.target.value)} />
                </div>

                <div className='i'>
                <label>Meia Entrada?</label>
                <input type='checkbox' value={meia} onChange={(e)=>setMeia(e.target.checked)}/>
                </div>

                <div className='i'>
                <label>Digite seu cupom:</label>
                <input type='text' value={cupom} onChange={(e)=>setCupom(e.target.value)}/>
                </div>

                <div className="i">
                <label></label>
                <button onClick={final}>Calcular</button>
                </div>

                
                <div className="i">
                <p className="total">O total é R$ {total}</p>
                </div>

                <Link to="/" className="voltar">← Voltar para a página inicial</Link>
                
            </section>
        </div>
    )
}