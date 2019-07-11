<template>
  <div class="final">
    <audio src="../assets/sounds/maintenant.mp3" id="audio"></audio>
    <div class="imgs">
      <img src="../assets/img/final/01.jpg" alt="">
      <img src="../assets/img/final/02.jpg" alt="">
      <img src="../assets/img/final/03.jpg" alt="">
      <img src="../assets/img/final/04.jpg" alt="">
      <img src="../assets/img/final/05.jpg" alt="">
      <img src="../assets/img/final/06.jpg" alt="">
      <img src="../assets/img/final/07.jpg" alt="">
      <img src="../assets/img/final/08.jpg" alt="">
    </div>

    <Scroll class="scroll"></Scroll>


    <article class="credits">
      <h1>QUAND LA VIE SE TERRE</h1>
      <h2>Chapitre 1 - New York</h2>
      <h4 class="disclaimer">Un Web-documentaire réalisé par</h4>
      <h4>Rami Cakir</h4>
      <h4>Hélène Margary</h4>
      <h4>Sarah Güngör</h4>
      <h4>Félix Robaglia</h4>
      <h4>Pierre Secher</h4>
    </article>

    <article class="subscribe">
      <h2>Ne ratez pas la suite...</h2>
      <h4>Abonnez-vous à notre <a href="https://twitter.com/QuandSe">twitter</a> pour être informé de la sortie des prochains épisodes.</h4>
    </article>
    <video class="clipFin" src="../assets/video/clipfin.mp4" autoplay loop preload></video>

    <div class="conclusion">
      <p>Les « hommes-Taupes » représentent une société à part entière, développée à travers une organisation interne qui leur permet de survivre dans des conditions hors du commun.</p>
    </div>

    <div class="hidden" style="height: 300vh; z-index: 10; background: rgba(0,0,0,0);"></div>
    <div class="hidden" style="height: 300vh; z-index: 10; background: rgba(0,0,0,0);"></div>

    <Navigation currentChapter=3 ></Navigation>
  </div>
</template>

<script>
import Navigation from  './Navigation';
import Scroll from './Scroll';

export default {
  mounted: function() {
    let imgs = document.querySelectorAll('img');

    // Random directions for the animation
    let randoms = [];
    imgs.forEach(img => {
      randoms.push([(Math.random()-0.5), (Math.random()-0.5)]);
    });

    let wrapper = document.querySelector('.imgs');

    let credits = document.querySelector('.credits');
    let title = document.querySelector('.credits h1');
    let subtitle = document.querySelector('.credits h2');
    let team = document.querySelectorAll('.credits h4');
    let subscribe = document.querySelector('.subscribe');
    let audio = document.getElementById('audio');
    let clip = document.querySelector('.clipFin')

    for (let i = 0; i < team.length; i++) {
      let decal = 40 + (i*6);
      if (i === 0) {
        decal = 35
      }
      team[i].style.marginTop = `${decal}vh`;
    }



    window.addEventListener('scroll', function() {
      console.log(window.scrollY, window.innerHeight*5)

      if (window.scrollY > window.innerHeight) {
        audio.play();
      }
      if (window.scrollY > window.innerHeight*5) {
        clip.style.display = `unset`;
      } else {
        clip.style.display = `none`;
      }
      
      if (window.scrollY > window.innerHeight*2) {

        credits.style.display = `none`;

        let opacity = -((window.scrollY - window.innerHeight*2) -(window.innerHeight*3))/(window.innerHeight*3); 

        for (let i = 0; i < imgs.length; i++) {
          imgs[i].style.opacity = `${opacity}`
        }


        credits.style.display = `unset`;

        let scroll = - window.innerHeight*2 + window.scrollY;

        title.style.transform = `translateX(-${scroll*4}px)`
        subtitle.style.transform = `translateX(-${(scroll*3)+50}px)`

        for (let i = 0; i < imgs.length; i++) {
          imgs[i].style.opacity = `${opacity}`
        }

        for (let i = 0; i < team.length; i++) {
          team[i].style.transform = `translateX(-${(scroll*2.5)-1500}px)`
        }
        subscribe.style.display = `none`;

        if (window.scrollY > window.innerHeight*4) {
          let opacity = ((window.scrollY + (window.innerHeight*4)) /(window.innerHeight))-8;
          subscribe.style.opacity = `${opacity}`;
          subscribe.style.display = `unset`;
        }


      } else if (window.scrollY <= window.innerHeight*2) {

        credits.style.display = `none`;

        let opacity = ((window.scrollY + (window.innerHeight*2)) /(window.innerHeight*2))-1;

        for (let i = 0; i < imgs.length; i++) {
          let factorX = (window.scrollY*randoms[i][0]/7)- 50;
          let factorY = (window.scrollY*randoms[i][1]/7)- 50;
          imgs[i].style.transform = `translate(${factorX}%,${factorY}%)`
          imgs[i].style.opacity = `${opacity}`
        }

      }
    })
  },
  components: {
    Navigation,
    Scroll
  }
}
</script>

