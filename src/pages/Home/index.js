import React from 'react';

//importação de arquivo com estilização global
import '../../assets/styles/global.css';

import './styles.css';

//importação dos icones
import icAlimento from '../../assets/img/iicones/free_breakfast-black-18dp (1).svg';
import icVoluntario from '../../assets/img/iicones/face-black-18dp.svg';
import icFinanceiro from '../../assets/img/iicones/extension-black-18dp.svg';

//importação do svg do baner
import BanerSvg from '../../assets/img/banner/programador.svg';

//importação dos components
import Header from '../../components/Header';//importação do menu da pagina
import Footer from '../../components/Footer';//importação do rodape de contatos da pagina

export default function Home(){
  return(
    <>
    <Header />
    <section className="banner">
        <img src={BanerSvg} alt="programador banner" id="img-inicial" />
        <div id="infor-iniciais">
          <h1 id="titulo-banner">CFPPT<br />Centro de Formação Profissional Professor Trindade</h1>
          <p id="para-infor">A ONG CFPPT, fundada em 06 de Janeiro de 2013, tem sua origem na necessidade em formar, capacitar e qualificar nossa gente.
            Nesses 7 anos de história, através de mais de 160 cursos, formamos exatos 3.611 profissionais.
            Vidas são transformadas, aqui existe foco na prática.
            Junto à fundação Anderson Trindade, oferecemos assistência médica, jurídica e educacional.
            Nossa missão é com a cidadania plena do Igarassuense.
            Venha ser firme conosco, faça parte desse grandioso legado que estamos construindo.</p>
              <a href="#contatos" id="button-inicial">Saber mais</a>
        </div>
    </section>

    <section className="titulo-infor">
      <h2 className="titulo-infor-paragrafo">Ajude a ONG nos projetos sociais se tornando um voluntario/colaborador</h2>
      <h3 className="sub-titulo-infor-paragrafo">qualquer duvida entre em contato</h3>
    </section>

    <section id="infor">
      <div id="info" >
        <h3 id="titulo-ajuda">Doação de alimentos</h3>
        <p id="sobre-info"> DOE! Doar, por definição é entregar-se. É multiplicar-se em outras pessoas. Você pode ajudar nossa ONG doando alimentos, roupas, itens de higiene pessoal ou brinquedos,clicando aqui.<br />[...]</p>
        <a href="https://wa.me/55081984344558?text=Olá%20ONG%20CFPPT.%20estou%20entrando%20em%20contato%20para%20obter%20mais%20informações%20sobre%20como%20contribuir%20com%20DOAÇÕES%20para%20a%20ONG."><img src={icAlimento} alt="" id="icon-ajuda" /></a>
      </div>
      <div id="info" >
        <h3 id="titulo-ajuda">Voluntário</h3>
        <p id="sobre-info"> ONG, essa palavra lembra amor, ajuda, voluntariado. Se você quiser ser um voluntário na nossa ONG, clique aqui, e venha ajudar várias famílias você também.<br />[...]</p>
        <a href="https://wa.me/55081984344558?text=Olá%20ONG%20CFPPT.%20estou%20entrando%20em%20contato%20para%20obter%20mais%20informações%20sobre%20como%20contribuir%20como%20VOLUNTÁRIO%20na%20ONG."><img src={icVoluntario}  alt="" id="icon-ajuda" /></a>
      </div>
      <div id="info" >
        <h3 id="titulo-ajuda">Doação financeira</h3>
        <p id="sobre-info">Financiamento coletivo de campanha, você sabe que isso é possível? As campanhas eleitorais agora são financiadas por pessoas físicas, e você pode mostrar seu apoio  doando qualquer quantia.<br />[...]</p>
        <a href="https://wa.me/55081984344558?text=Olá%20ONG%20CFPPT.%20estou%20entrando%20em%20contato%20para%20obter%20mais%20informações%20sobre%20como%20contribuir%20FINANCEIRAMENTE%20para%20a%20ONG."><img src={icFinanceiro}  alt="" id="icon-ajuda" /></a>
      </div>
    </section>

    <Footer />
    </>
  );
}