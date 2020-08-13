import React from 'react';//importação do react

//importação de arquivo com estilização global
import '../../assets/styles/global.css';

import LogImg from '../../assets/img/logo/logo_ong.jpeg';//importação do logo do menu

import './styles.css';//importação do arquivo de estilização do css

export default function Header(){
  return(
    <div id="menu">
      <img src={LogImg} id="img-log-ong" alt="Logo ong" />
        <ul className="ul">
          <a href="#sobre" id="link">Sobre</a>
          <a href="#infor" id="link">Ajuda</a>
          <a href="#contatos" id="link">Contatos</a>
        </ul>            
    </div>
  );
}