import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Header, Titulo, Banner, ContentOne, ContentTwo } from './styles';

import {RiHome2Line  } from 'react-icons/ri';

import banner from '../../assets/pictures/universe-banner.jpg';
import banner2 from '../../assets/pictures/universe-banner2.jpg'
import banner3 from '../../assets/pictures/universe-banner3.jpg'
import banner4 from '../../assets/pictures/universe-banner4.jpg'
import banner5 from '../../assets/pictures/universe-banner5.jpg'
import logo from '../../assets/pictures/logo.gif'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export default function Main() {
  const classes = useStyles();

  return (
    <>
      <Header>
        <div className="outer">

          <div className="home">
            <a href="#"><RiHome2Line size={26} /></a>
          </div>

          <Titulo>
            <li><a>Quem somos nós</a></li>
            <li><a>Como Participar</a></li>
            <li><a>Nossa Meta</a></li>
            <li><a>Galeria de atividades</a></li>
            <li><a>Contato</a></li>
          </Titulo>

          <Button variant="outlined" color="inherit" className={classes.button}>
            Entrar
          </Button>

        </div>
      </Header>

      <Banner id="banner-top" img={banner} br>
        <h1 className="nomeSite">Missão Rama Brasil</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,192L1440,320L1440,320L0,320Z"></path>
      </svg>
      </ Banner>


    <ContentOne >

      <div id="QuemSomosNos">
        <h1>Quem somos nós</h1>

        <hr/>

        <div className="content">
          <img src={logo}/>
          <p>Somos um grupo de pessoas que dedica suas vidas a realizar um Programa de Treinamento para que nos tornemos Cidadãos Cósmicos, aperfeiçoando-nos a cada dia, para conquistarmos a internalização da Ética Universal</p>
        </div>
      </div>
    </ContentOne>

    <Banner img={banner2} />

    <ContentTwo className="completar">
 <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis condimentum purus, eu semper libero rutrum eget. Vivamus quis lacinia lectus. Quisque vitae placerat ex. Integer congue bibendum dolor, vel venenatis ipsum consequat in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum cursus cursus nibh, et luctus nibh auctor sed. Maecenas in egestas ligula, at molestie tortor. Morbi eget risus nibh. Duis vel mi ac purus molestie ultrices. Proin sodales mauris at magna ultrices, ut laoreet odio porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nulla venenatis, maximus lacus vel, cursus lectus. Donec ornare tristique tellus eu tristique. Pellentesque non odio at dolor ullamcorper vestibulum quis eu diam.
</p>
<p>
Praesent ornare purus vel dui imperdiet condimentum. Suspendisse pharetra ante sagittis sapien vulputate consectetur. Sed egestas tempus condimentum. In hac habitasse platea dictumst. Morbi id condimentum dolor, ut auctor erat. Curabitur vestibulum varius imperdiet. Donec scelerisque placerat nibh, dapibus rutrum neque porta in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In molestie, massa at efficitur tempus, risus justo tincidunt eros, at pellentesque tellus nunc eu purus. Sed ut ex lectus. Fusce tempor leo non mauris semper feugiat.
</p>
<p>
Praesent fringilla venenatis est in fringilla. Ut auctor tempus purus, sit amet iaculis nisl sagittis a. Ut vitae libero aliquet, dapibus dui laoreet, euismod nisi. In pretium eu tortor vel eleifend. Nam hendrerit porttitor ultrices. Aenean quis elementum quam. Praesent laoreet quam eu quam condimentum finibus.
</p>
<p>
Donec sit amet est et lacus accumsan suscipit. Aliquam sed augue non lorem dictum molestie. Donec urna ex, sagittis quis interdum vitae, auctor et velit. Etiam efficitur, ipsum in hendrerit bibendum, nisl lacus mattis neque, quis vestibulum ligula risus non enim. Quisque dictum vel dui cursus eleifend. Aenean id lorem placerat, finibus tortor id, blandit erat. Vivamus ac leo quis leo imperdiet accumsan. Aliquam augue turpis, iaculis sed orci in, eleifend dictum felis. Cras id massa malesuada, suscipit leo vel, vulputate velit. Praesent in feugiat augue, a hendrerit tortor.
</p>
<p>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed feugiat volutpat mauris vitae scelerisque. Etiam laoreet lectus lacus, eu sagittis nulla convallis eget. Quisque cursus et justo ut tempus. Donec porttitor volutpat mauris at vulputate. Suspendisse potenti. Cras turpis est, pellentesque vel ex ut, euismod consectetur est.
</p>
    </ContentTwo>


    <Banner img={banner3} />

    <ContentTwo className="completar">
 <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis condimentum purus, eu semper libero rutrum eget. Vivamus quis lacinia lectus. Quisque vitae placerat ex. Integer congue bibendum dolor, vel venenatis ipsum consequat in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum cursus cursus nibh, et luctus nibh auctor sed. Maecenas in egestas ligula, at molestie tortor. Morbi eget risus nibh. Duis vel mi ac purus molestie ultrices. Proin sodales mauris at magna ultrices, ut laoreet odio porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nulla venenatis, maximus lacus vel, cursus lectus. Donec ornare tristique tellus eu tristique. Pellentesque non odio at dolor ullamcorper vestibulum quis eu diam.
</p>
<p>
Praesent ornare purus vel dui imperdiet condimentum. Suspendisse pharetra ante sagittis sapien vulputate consectetur. Sed egestas tempus condimentum. In hac habitasse platea dictumst. Morbi id condimentum dolor, ut auctor erat. Curabitur vestibulum varius imperdiet. Donec scelerisque placerat nibh, dapibus rutrum neque porta in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In molestie, massa at efficitur tempus, risus justo tincidunt eros, at pellentesque tellus nunc eu purus. Sed ut ex lectus. Fusce tempor leo non mauris semper feugiat.
</p>
<p>
Praesent fringilla venenatis est in fringilla. Ut auctor tempus purus, sit amet iaculis nisl sagittis a. Ut vitae libero aliquet, dapibus dui laoreet, euismod nisi. In pretium eu tortor vel eleifend. Nam hendrerit porttitor ultrices. Aenean quis elementum quam. Praesent laoreet quam eu quam condimentum finibus.
</p>
<p>
Donec sit amet est et lacus accumsan suscipit. Aliquam sed augue non lorem dictum molestie. Donec urna ex, sagittis quis interdum vitae, auctor et velit. Etiam efficitur, ipsum in hendrerit bibendum, nisl lacus mattis neque, quis vestibulum ligula risus non enim. Quisque dictum vel dui cursus eleifend. Aenean id lorem placerat, finibus tortor id, blandit erat. Vivamus ac leo quis leo imperdiet accumsan. Aliquam augue turpis, iaculis sed orci in, eleifend dictum felis. Cras id massa malesuada, suscipit leo vel, vulputate velit. Praesent in feugiat augue, a hendrerit tortor.
</p>
<p>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed feugiat volutpat mauris vitae scelerisque. Etiam laoreet lectus lacus, eu sagittis nulla convallis eget. Quisque cursus et justo ut tempus. Donec porttitor volutpat mauris at vulputate. Suspendisse potenti. Cras turpis est, pellentesque vel ex ut, euismod consectetur est.
</p>
    </ContentTwo>


    <Banner img={banner4} />

    <ContentTwo className="completar">
 <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis condimentum purus, eu semper libero rutrum eget. Vivamus quis lacinia lectus. Quisque vitae placerat ex. Integer congue bibendum dolor, vel venenatis ipsum consequat in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum cursus cursus nibh, et luctus nibh auctor sed. Maecenas in egestas ligula, at molestie tortor. Morbi eget risus nibh. Duis vel mi ac purus molestie ultrices. Proin sodales mauris at magna ultrices, ut laoreet odio porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nulla venenatis, maximus lacus vel, cursus lectus. Donec ornare tristique tellus eu tristique. Pellentesque non odio at dolor ullamcorper vestibulum quis eu diam.
</p>
<p>
Praesent ornare purus vel dui imperdiet condimentum. Suspendisse pharetra ante sagittis sapien vulputate consectetur. Sed egestas tempus condimentum. In hac habitasse platea dictumst. Morbi id condimentum dolor, ut auctor erat. Curabitur vestibulum varius imperdiet. Donec scelerisque placerat nibh, dapibus rutrum neque porta in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In molestie, massa at efficitur tempus, risus justo tincidunt eros, at pellentesque tellus nunc eu purus. Sed ut ex lectus. Fusce tempor leo non mauris semper feugiat.
</p>
<p>
Praesent fringilla venenatis est in fringilla. Ut auctor tempus purus, sit amet iaculis nisl sagittis a. Ut vitae libero aliquet, dapibus dui laoreet, euismod nisi. In pretium eu tortor vel eleifend. Nam hendrerit porttitor ultrices. Aenean quis elementum quam. Praesent laoreet quam eu quam condimentum finibus.
</p>
<p>
Donec sit amet est et lacus accumsan suscipit. Aliquam sed augue non lorem dictum molestie. Donec urna ex, sagittis quis interdum vitae, auctor et velit. Etiam efficitur, ipsum in hendrerit bibendum, nisl lacus mattis neque, quis vestibulum ligula risus non enim. Quisque dictum vel dui cursus eleifend. Aenean id lorem placerat, finibus tortor id, blandit erat. Vivamus ac leo quis leo imperdiet accumsan. Aliquam augue turpis, iaculis sed orci in, eleifend dictum felis. Cras id massa malesuada, suscipit leo vel, vulputate velit. Praesent in feugiat augue, a hendrerit tortor.
</p>
<p>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed feugiat volutpat mauris vitae scelerisque. Etiam laoreet lectus lacus, eu sagittis nulla convallis eget. Quisque cursus et justo ut tempus. Donec porttitor volutpat mauris at vulputate. Suspendisse potenti. Cras turpis est, pellentesque vel ex ut, euismod consectetur est.
</p>
    </ContentTwo>



    <Banner img={banner5} />

    <ContentTwo className="completar">
 <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis condimentum purus, eu semper libero rutrum eget. Vivamus quis lacinia lectus. Quisque vitae placerat ex. Integer congue bibendum dolor, vel venenatis ipsum consequat in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum cursus cursus nibh, et luctus nibh auctor sed. Maecenas in egestas ligula, at molestie tortor. Morbi eget risus nibh. Duis vel mi ac purus molestie ultrices. Proin sodales mauris at magna ultrices, ut laoreet odio porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nulla venenatis, maximus lacus vel, cursus lectus. Donec ornare tristique tellus eu tristique. Pellentesque non odio at dolor ullamcorper vestibulum quis eu diam.
</p>
<p>
Praesent ornare purus vel dui imperdiet condimentum. Suspendisse pharetra ante sagittis sapien vulputate consectetur. Sed egestas tempus condimentum. In hac habitasse platea dictumst. Morbi id condimentum dolor, ut auctor erat. Curabitur vestibulum varius imperdiet. Donec scelerisque placerat nibh, dapibus rutrum neque porta in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In molestie, massa at efficitur tempus, risus justo tincidunt eros, at pellentesque tellus nunc eu purus. Sed ut ex lectus. Fusce tempor leo non mauris semper feugiat.
</p>
<p>
Praesent fringilla venenatis est in fringilla. Ut auctor tempus purus, sit amet iaculis nisl sagittis a. Ut vitae libero aliquet, dapibus dui laoreet, euismod nisi. In pretium eu tortor vel eleifend. Nam hendrerit porttitor ultrices. Aenean quis elementum quam. Praesent laoreet quam eu quam condimentum finibus.
</p>
<p>
Donec sit amet est et lacus accumsan suscipit. Aliquam sed augue non lorem dictum molestie. Donec urna ex, sagittis quis interdum vitae, auctor et velit. Etiam efficitur, ipsum in hendrerit bibendum, nisl lacus mattis neque, quis vestibulum ligula risus non enim. Quisque dictum vel dui cursus eleifend. Aenean id lorem placerat, finibus tortor id, blandit erat. Vivamus ac leo quis leo imperdiet accumsan. Aliquam augue turpis, iaculis sed orci in, eleifend dictum felis. Cras id massa malesuada, suscipit leo vel, vulputate velit. Praesent in feugiat augue, a hendrerit tortor.
</p>
<p>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed feugiat volutpat mauris vitae scelerisque. Etiam laoreet lectus lacus, eu sagittis nulla convallis eget. Quisque cursus et justo ut tempus. Donec porttitor volutpat mauris at vulputate. Suspendisse potenti. Cras turpis est, pellentesque vel ex ut, euismod consectetur est.
</p>
    </ContentTwo>




         </>
  );
}
