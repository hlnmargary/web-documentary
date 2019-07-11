<template>
  <div>
    <div class="teaser">
      <video ref="video" src="../assets/video/videoIntro.mp4" autoplay></video>
      <h1>QUAND LA VIE SE TERRE</h1>
      <h2>CHAPITRE 1 - NEW YORK</h2>
    </div>
    <span href="#" @click="skipVideo" class="skip">
      Passer la vidéo
    </span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        videoIsPlaying: true
      };
    },
    mounted: function () {
      // let zoom = document.querySelector('.zoom');
      // let scroll;
      // let per;
      // let hidden = document.querySelector('.hidden');
      // let zoomTop = zoom.getBoundingClientRect().top + window.scrollY;

      // window.addEventListener('scroll', function () {

      //   scroll = window.scrollY - zoomTop
      //   per = scroll / zoomTop * 100

      //   if (window.scrollY > zoomTop && window.scrollY < zoomTop + zoom.offsetHeight * 2) {
      //     zoom.classList.add('zoom--isFixed')
      //     hidden.style.display = 'block';
      //     zoom.style.backgroundSize = per * 8 +window.innerWidth +'px'

      //   } else {
      //     zoom.classList.remove('zoom--isFixed')
      //     hidden.style.display = 'none';
      //   }
      // })
    },
     methods: {
      skipVideo() {
        let body = document.querySelector('body');
        let nav = document.querySelector('nav');
        let skipButton = document.querySelector('.skip');
        body.style.overflowY = 'initial';
        nav.style.display = 'flex';
        this.videoIsPlaying = !this.videoIsPlaying
        let video = this.$refs.video;
        if (!this.videoIsPlaying) {
          video.pause();
          skipButton.innerHTML = 'Reprendre la vidéo'
          document.getElementById('zoom').scrollIntoView();
        } else {
          video.play();
          skipButton.innerHTML = 'Mettre en pause la vidéo'
        }
      }
     }
  };
</script>