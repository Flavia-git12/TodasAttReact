
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculadora from './pages/calcu';
import Ingressos from './pages/ingressos';
import Inicio from './pages/inicio';
import Contador from './pages/contador';
import Eventos from './pages/threevariaveis';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/calculadora' element={<Calculadora />} />
                <Route path='/ingressos' element={<Ingressos />} />
                <Route path='/contador' element={<Contador />} />
                <Route path='/eventos' element={<Eventos/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
