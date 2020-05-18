import React from 'react';

import { Title, Banner, Completar } from './styles';

import abertura from '../../assets/videos/video-abertura.mp4';
import banner from '../../assets/pictures/universe-banner.jpg';

import Header from '../components/header';

export default function Main() {
  return (
    <>
      <Header />
      <Banner src={banner} />
      <Title>Hello World</Title>

    <Completar className="completar">
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

    </Completar>
         </>
  );
}
