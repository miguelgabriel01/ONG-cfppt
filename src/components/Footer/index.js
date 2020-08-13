import React from 'react';

//importação de arquivo com estilização global
import '../../assets/styles/global.css';

import './styles.css';//importação do arquivo de estilização do footer

import IconEndereço from '../../assets/img/iicones/icon12.svg';
import IconTelefone from '../../assets/img/iicones/icon13.svg';
import IconEmail from '../../assets/img/iicones/icon14.svg';

export default function Footer(){
  return(
    <section id="contatos">
    <h2></h2>
    <div id="caixa-email">
        <div className="form-Email">
            <h3 id="form-info">Entre em contato para mais informações</h3>
            <form>
                <input placeholder="Nome"  required="" type="text" name="nome"/>
                <input placeholder="E-mail"  required=""type="email" name="email" />
                   <textarea placeholder="Mensagem" maxlength="500" required="" name="mensagem"></textarea>
                 
                 <button className="button-Enviar" type="submit" >Enviar mensagem</button>
                 
            </form>
        </div>
    </div>

    <div id="link-contatos">
         
            <a href="https://goo.gl/maps/USHE8AM7Bxq82WWB6" id="contato"><img src={IconEndereço} alt="" id="img-icons"/> Igarassu | Pernambuco</a>
            <a id="contato"><img src={IconTelefone} alt="" id="img-icons"/> 081 98434-4558</a>
            <a id="contato"><img src={IconEmail} alt="" id="img-icons"/> cfppt.fat@gmail.com</a>

            <div id="icons-contatos">
                <a href="#" id="icons" ><i className="fa fa-twitter"  aria-hidden="true" /></a>
                <a href="https://www.facebook.com/andersonbarbosa.trindade" id="icons" ><i className="fa fa-facebook"  aria-hidden="true" /></a>
                <a href="https://www.instagram.com/trindadeanderson77/" id="icons" ><i className="fa fa-instagram"  aria-hidden="true" /></a>
                <a href="https://wa.me/55081984344558?text=Olá%20Anderson.%20como%20posso%20conhecer%20um%20pouco%20mais%20sobre%20seu%20trabalho?" id="icons" ><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
            </div>

    </div>
</section>
  );
}