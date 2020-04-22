import React from 'react';

import { GoSearch } from 'react-icons/go';

import { Container, Titulo, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <div className="search">
      <GoSearch size={36} />
      </div>

      <Titulo>
        <li><a>Quem somos nós</a></li>
        <li><a>Como Participar</a></li>
        <li><a>Nossa Meta</a></li>
        <li><a>Galeria</a></li>
        <li><a>Contato</a></li>
      </Titulo>

      <Profile>Pessoa</Profile>

    </ Container>
  );
}
