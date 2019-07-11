<template>
  <div>
    <Navigation currentChapter=2></Navigation>
    <div class="mapInfo">
      <h1>Témoignages</h1>
    </div>
    <div class="background"></div>

    <div @mouseenter="zoneEnter(river)" @mouseleave="zoneLeave(river)" class="zone riverside"></div>
    <div @mouseenter="zoneEnter(grand)" @mouseleave="zoneLeave(grand)" class="zone grandCentral"></div>
    <div @mouseenter="zoneEnter(penn)" @mouseleave="zoneLeave(penn)" class="zone pennStation"></div>
    
    <div class="underground">
      <!-- <div class="mp" :style="{ top: `${profile.XPos}%`, left: `${profile.YPos}%` }"></div>
      <div class="mp" style="top: 20%;left: 45%"></div>
      <div class="mp" style="top: 42%;left: 49%"></div> -->
      <div class="mp" v-for="profile in profiles" :key="profile._id" :style="{ top: `${profile.XPos}%`, left: `${profile.YPos}%` }"> 
        <audio :ref="profile.name" :src="profile.cardSound" type="audio/mp3">
        </audio>
      </div>
    </div>

    <div class="points">
      <div @click="redirect(profile)" @mouseenter="mouseOverPoint(profile)" @mouseleave="mouseLeavePoint" class="point" v-for="profile in profiles" :key="profile._id" :style="{ top: `${profile.XPos}%`, left: `${profile.YPos}%` }"></div>
    </div>

    <div class="legend">
      <div class="legend__point"></div>
      <p>Pour découvrir les histoires des “hommes taupes”,<br>survolez Manhattan et cliquez sur les points</p>
    </div>

    <Card ref="card" v-bind:profile="hoveredProfile">
    </Card>

    <!-- A METTRE EN SYMBOL -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" class="hidden text river">
      <defs>
      <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" class="circle" fill="black">
      <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
      </path>
      </defs>
      <text dy="70" textLength="1220" fill="white" letter-spacing="10">
        <textPath xlink:href="#textcircle">Riverside Park</textPath>
      </text>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" class="hidden text grand">
      <defs>
      <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" class="circle" fill="black">
      <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
      </path>
      </defs>
      <text dy="70" textLength="1220" fill="white" letter-spacing="10">
        <textPath xlink:href="#textcircle">Grand Central Terminal</textPath>
      </text>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" class="hidden text penn">
      <defs>
      <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" class="circle" fill="black">
      <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
      </path>
      </defs>
      <text dy="70" textLength="1220" fill="white" letter-spacing="10">
        <textPath xlink:href="#textcircle">Pennsylvania Station</textPath>
      </text>
    </svg>

  </div>
</template>

<script>
  import Card from './Card';
  import Navigation from './Navigation';

  export default {
    data() {
      return {
        hoveredProfile: null,
        profiles: []
      }
    },
    mounted() {
      let uri = 'http://localhost:4000/profiles';
        this.axios.get(uri).then(response => {
          this.profiles = response.data;
      });
      this.cursor = document.querySelector('.cursor');
      this.river = document.querySelector('.river');
      this.grand = document.querySelector('.grand');
      this.penn = document.querySelector('.penn');
      this.clientX = -100;
      this.clientY = -100;
      this.riversideZone = document.querySelector('.zone.riverside');
      this.grandZone  = document.querySelector('.zone.grandCentral');
      this.pennZone = document.querySelector('.zone.pennStation')
      this.underground = document.querySelector('.underground')
      this.checker = true;
      document.addEventListener("mousemove", e => {
          this.clientX = e.clientX;
          this.clientY = e.clientY;
      });
      this.loop();
    },
    methods: {
      mouseOverPoint(profile) {
          this.checker = false;
          let profileName = profile.name;
          let audio = this.$refs[profileName][0];
          this.audioPlaying = audio;
          this.audioPlaying.currentTime = 0;
          //this.audioPlaying.play();
          this.$refs.card.$el.classList.add('is-shown');
          this.hoveredProfile = profile;
      },
      mouseLeavePoint() {
          this.audioPlaying.pause();
          this.checker = true;
          this.$refs.card.$el.classList.remove('is-shown');
      },
      loop() {
        this.underground.style.clipPath =  `circle(100px at ${this.clientX}px ${this.clientY}px)`;
        this.river.style.transform = `translate(${this.clientX-225}px, ${this.clientY-225}px)`;
        this.grand.style.transform = `translate(${this.clientX-225}px, ${this.clientY-225}px)`;
        this.penn.style.transform = `translate(${this.clientX-225}px, ${this.clientY-225}px)`;
        requestAnimationFrame(this.loop);
      },
      zoneEnter(zone) {
        zone.classList.remove('hidden')
      },
      zoneLeave(zone) {
        setTimeout(() => {
          if (this.checker) {
            zone.classList.add('hidden')
          }
        }, 10);
      },
      redirect(profile) {
        this.$router.push({ name: 'player', params: { id: profile._id }});
      }
    },
    components: {
      Card,
      Navigation
    }
  }
</script>