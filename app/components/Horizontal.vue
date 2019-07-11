<template>
  <div>
    <section class="section section--horizontal">
      <div class="section__inner section__inner--1">
        <div class="moles">
          <div class="moles__img moles__img--1"></div>
          <div class="textHidder">
            <div class="textHidder"></div>
          </div>
          <div class="moles__img moles__img--1"></div>
          <div class="textHidder"></div>
          <div class="moles__img moles__img--1"></div>
        </div>
      </div>
    </section>

    <Covers></Covers>

    <section class="section section--horizontal">
      <div class="section__inner section__inner--2">
        <div class="moles">
          <div class="moles__img moles__img--2"></div>
          <div class="textHidder"></div>
          <div class="moles__img moles__img--2"></div>
        </div>
      </div>
    </section>
    <div class="molesText">
      <div class="molesText__content">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import Covers from './Covers';

export default {
  components: {
    Covers
  },
  data() {
    return {};
  },
  mounted() {
    var horizontals = document.querySelectorAll(".section--horizontal");
    var text = document.querySelector(".molesText__content p");

    let firstHorizontalSection = document.querySelectorAll(
      ".section--horizontal"
    )[0];
    let secondHorizontalSection = document.querySelectorAll(
      ".section--horizontal"
    )[1];

    let firstTexts = {
      one: `"Avec toutes les habitations du bas, on a une vraie cité"`,
      two: 'Environ 5000 « hommes-taupes » <br> dans les années 90',
      three:
        `"En haut, c'est chacun pour soi. <br> Le tunnel, c'est une grande famille"`
    };

    let secondTexts = {
      one: "Grandes rafles de 95",
      two: 'Il est aujourd\'hui impossible de déterminer le nombre exact <br> des « hommes-taupes »',
      three: ""
    };

    makeHorizontal(firstHorizontalSection, firstTexts);
    makeHorizontal(secondHorizontalSection, secondTexts);

    function makeHorizontal(horizontal, texts) {
      var inner = horizontal.querySelector(".section__inner");
      window.addEventListener("scroll", function() {
        window.requestAnimationFrame(function() {
          if (!document.querySelector(".section--isFixed")) {
            text.innerHTML = "";
          }
          var toGo = horizontal.offsetHeight - window.innerHeight;
          var position = window.scrollY - horizontal.offsetTop;

          var progression = position / toGo;

          if (progression > 0 && progression < 1) {
            horizontal.classList.add("section--isFixed");

            if (progression < 0.25) {
              text.innerHTML = texts.one;
              // text.style.color = "#0000ff";
            } else if (progression < 0.8) {
              text.innerHTML = texts.two;
              // text.style.color = "#ffffff";
            } else if (progression < 1) {
              text.innerHTML = texts.three;
              // text.style.color = "#ffffff";
            }
          } else {
            horizontal.classList.remove("section--isFixed");
          }

          if (progression >= 1) {
            horizontal.classList.add("section--isScrolled");
          } else {
            horizontal.classList.remove("section--isScrolled");
          }

          setTranslateX(inner, progression);
        });
      });
    }

    function setTranslateX(element, progression) {
      // Limit the progression factor between 0 & 1
      if (progression > 1) {
        progression = 1;
      } else if (progression < 0) {
        progression = 0;
      }

      // The size to move is the element width minus the window width
      var toMove = element.offsetWidth - window.innerWidth;

      // The transform factor is the size to move multiplied by the progression
      var transform = -1 * toMove * progression + "px";
      element.style.transform = "translateX(" + transform + ")";
    }
  }
};
</script>