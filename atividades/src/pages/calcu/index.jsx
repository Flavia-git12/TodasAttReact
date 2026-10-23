import './index.scss'
import { useState } from 'react'

export default function Calculadora(){
    const [num1, setnum1] = useState("")
    const [num2, setnum2] = useState("")
    const [resp, setresp] = useState("")

    const [numSub, setnumSub] = useState("")
    const [num2Sub, setnum2Sub] = useState("")
    const [respSub, setrespSub] = useState("")
  
    const[numMult, setnumMult] = useState("")
    const[num2Mult, setnum2Mult] = useState("")
    const [respMult, setrespMult] = useState("")

    const[numDiv, setnumDiv] = useState("")
    const[num2Div, setnum2Div] = useState("")
    const [respDiv, setrespDiv] = useState("")

/// Soma:

    function capnum1(e) {

        let novovalor = e.target.value;
        setnum1(novovalor);

    }
    function capnum2(e) {

        let novovalor = e.target.value;
        setnum2(novovalor);

    }

    function somar() {
        let soma = Number(num1) + Number(num2)
        setresp(soma);

    }

/// Subtração:
    function capnum1Sub(e){
        let novoValor = e.target.value;
        setnumSub(novoValor);
    }

    function capnumSub2(e){
        let novoValor = e.target.value;
        setnum2Sub(novoValor);
    }

    function menos(){
        let menos = Number(numSub) - Number(num2Sub)
        setrespSub(menos);
    }

/// Multiplicação:

    function multiplicar(){
        let multiplicar = Number(numMult) * Number(num2Mult)
        setrespMult(multiplicar);
    }

    function capnumMult1(e){
        let novoValor = e.target.value;
        setnumMult(novoValor);
    }

    function capnumMult2(e){
        let novoValor = e.target.value;
        setnum2Mult(novoValor);
    }

/// Divisão:
    function dividir(){
        let dividir = Number(numDiv) / Number(num2Div)
        setrespDiv(dividir);
    }

    function capnumDiv1(e){
        let novoValor = e.target.value;
        setnumDiv(novoValor);
    }

    function capnumDiv2(e){
        let novoValor = e.target.value;
        setnum2Div(novoValor);
    }
      
    return(
        <div className='pai'>
          <section className="section">
                <div className="c">

                    <h2>Adição</h2>

                    <div className="inputs">

            <input type="text" value={num1} onChange={(e)=>setnum1(e.target.value)} />
            <input type="text" value={num2} onChange={(e)=>setnum2(e.target.value)} />
                       <div>=</div>
                       
                       <div>{resp}</div>
                         
                       <button onClick={somar}>Somar</button>
                </div>
                </div>
               
            </section>

            <section className='section'>

        <div className='m'>
            <h2>Subtração</h2>

         <input type="text" value={numSub} onChange={(e)=>setnumSub(e.target.value)} />
        <input type="text" value={num2Sub} onChange={(e)=>setnum2Sub(e.target.value)} />
        <div>=</div>
                       
                       <div>{respSub}</div>
                         
                       <button onClick={menos}>Menos</button>

                </div>

            </section> 

            <section className='section'>
                <div className='v'>

                <h2>Multiplicação</h2>

        <input type="text" value={numMult} onChange={(e)=>setnumMult(e.target.value)} />
    <input type="text" value={num2Mult} onChange={(e)=>setnum2Mult(e.target.value)} />
        <div>=</div>
                       
                       <div>{respMult}</div>
                         
                       <button onClick={multiplicar}>Multiplicar</button>

                </div>
            </section>

             <section className='section'>
                <div className='d'>

                    <h2>Divisão</h2>

    <input type="text" value={numDiv} onChange={(e)=>setnumDiv(e.target.value)} />
    <input type="text" value={num2Div} onChange={(e)=>setnum2Div(e.target.value)} />
        <div>=</div>
                       
                       <div>{respDiv}</div>
                         
                       <button onClick={dividir}>Dividir</button>

                </div>
            </section>
        </div>
    )}   