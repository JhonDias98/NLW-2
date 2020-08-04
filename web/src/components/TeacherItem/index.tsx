import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/52224050?s=460&u=39842a3a7ca87d3c7a40b454fe20f9ad2507209d&v=4"
          alt="Jonathan Dias"
        />
        <div>
          <strong>Jonathan Dias</strong>
          <span>Back-end</span>
        </div>
      </header>
      <p>
        Desenvolvedor Web Fullstack
        <br />
        Venha aprender SpringBoot, um dos frameworks mais utilizados no momento.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;