import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Eventos() {

    const [opcao, setOpcao] = useState("");

    function Alterou() {
        alert("Você alterou o valor do input");
    }

    function Passou() {
        alert("Passou o Mouse Sobre");
    }

    function MostrarOpcao() {
        alert("Você selecionou: " + opcao);
    }

    return (
        <div className='Pagina-Eventos pagina'>
            <div className="container">

                <h2>Entendendo eventos</h2>

                <p onMouseMove={Passou}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus sed ad adipisci architecto fuga nam ut saepe
                    necessitatibus ab nostrum omnis, repellat fugit alias
                    praesentium expedita minus culpa cupiditate numquam?
                </p>

                <input
                    onChange={Alterou}
                    type="text"
                    placeholder="Digite aqui alguma coisa"
                />

                <select onChange={Alterou}>
                    <option>Selecione</option>
                    <option>Opção 1</option>
                    <option>Opção 2</option>
                    <option>Opção 3</option>
                </select>

                <div className="opcoes">

                    <label>
                        <input
                            type="radio"
                            name="opcao"
                            value="Opção 1"
                            onChange={(e) => setOpcao(e.target.value)}
                        />
                        Opção 1
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="opcao"
                            value="Opção 2"
                            onChange={(e) => setOpcao(e.target.value)}
                        />
                        Opção 2
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="opcao"
                            value="Opção 3"
                            onChange={(e) => setOpcao(e.target.value)}
                        />
                        Opção 3
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="opcao"
                            value="Opção 4"
                            onChange={(e) => setOpcao(e.target.value)}
                        />
                        Opção 4
                    </label>

                </div>

                <button onClick={MostrarOpcao}>
                    Clique aqui
                </button>

            <Link to="/" className="voltar">← Voltar para a página inicial</Link>            
        </div>
    </div>
);
}