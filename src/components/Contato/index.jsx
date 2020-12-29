import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

import './style.css';

function Contato() {
  return (
    <div className="contato" id="contato">
      <h1>Entre em contato</h1>
      <h2>Telefone: (14) 99999-9999</h2>
      <h3>Rua: Em algum lugar, n° 123</h3>
      <Link smooth to="#inicio" style={{color: '#FFF'}}>Ir para Home</Link>
      <br/>
      <Link smooth to="#sobre" style={{color: '#FFF'}}>Ir para Sobre</Link>
    </div>
  )
}

export default Contato;