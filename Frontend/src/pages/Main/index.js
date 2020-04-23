import React from 'react';

import { Title, Video } from './styles';

import abertura from '../../assets/videos/video-abertura.mp4';

import Header from '../components/header';

export default function Main() {
  return (
    <>
      <Header />
      <Video autoPlay loop muted>
        <source src={abertura} type="video/mp4"/>
      </Video>
      <Title>Hello World</Title>
    </>
  );
}
