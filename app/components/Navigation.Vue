<template>
  <nav @mouseleave="mouseLeave">
    <div class="line">
      <div ref="indicator" class="indicator"> </div>
    </div>

    <div class="numbers">
      <ol>
        <li class="nav-item" @mouseover="mouseEnter(item)" v-for="item in navItems" :key="item.chapter"> 
          <router-link class="nav-link" :to="item.path"> 
            {{ item.chapter }}
          </router-link>
          <span class="tooltip"> {{ item.tooltip }} </span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style lang='scss'>

body {
  background: black;
}

nav {
  animation: fromLeft .5s ease-in-out;
  padding-top: 30vh;
  font-weight: lighter;
  justify-content: space-between;
  display: flex;
  width: 5%;
  height: 100vh;
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  
  background: linear-gradient(269.55deg, #000000 4.63%, rgba(0, 0, 0, 0) 96.92%);

  .numbers {
    height: 40%;
    width: 60%;

    ol {
      height: 100%;
      justify-content: space-between;
      display: flex;
      flex-flow: column wrap;
      list-style: none;

      .nav-item {
        position: relative;
        display: inline-block;
        cursor: pointer;
        color: white;
        font-size: 24px;

        .tooltip {
          opacity: 0;
          transition: opacity 0.4s, transform 0.4s;
          transform: translateX(-20px);
          visibility: hidden;
          font-size: 20px;
          white-space: nowrap;
          color: white;
          text-align: center;
          padding: 8px;
          border-radius: 6px;
          position: absolute;
          top: -4px;
          right: 205%; 

          &::after {
            content: " ";
            position: absolute;
            top: 50%;
            left: 100%; /* To the left of the tooltip */
            margin-top: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent transparent white;
          }
        }

        &:hover .tooltip {
          opacity: 1;
          transform: none;
          visibility: visible;
        }

        .nav-link {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
  
  .line {
    position: relative;
    width: 1px;
    height: 40%;
    border-radius: 10px;

    .indicator {
      transition: top .5s;
      height: 50px;
      position: absolute;
      top: -12.5px;
      border-radius: 1px;
      left: -25%;
      width: 150%;
      background: white;
    }
  }
}

</style>

<script>

export default {
  data() {
    return {
      navItems: [
        {
          chapter: 1,
          path: '/home',
          tooltip: 'Une ville souterraine'
        },
        {
          chapter: 2,
          path: '/map',
          tooltip: 'Les homme-taupes'
        },
        {
          chapter: 3,
          path: '/final',
          tooltip: 'Les oubliés'
        }
      ],
      positions: ['-12.5px', 'calc(50% - 25px)', 'calc(100% - 37.5px']
    }
  },
  methods: {
    mouseEnter(item) {
      let indicator = this.$refs.indicator;
      indicator.style.top = this.positions[item.chapter - 1];
    },
    mouseLeave() {
      let indicator = this.$refs.indicator;
      indicator.style.top = this.positions[this.currentChapter - 1];
    }
  },
  mounted() {
    let indicator = this.$refs.indicator;
    indicator.style.top = this.positions[this.currentChapter - 1];
  },
  props: ['currentChapter'],
};

</script>