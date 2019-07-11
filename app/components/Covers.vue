<template>
  <div>
    <section class="melange__section melange__section--horizontal">
      <div class="melange__section__inner">
        <div class="melange">
          <img v-for="i in 25 " :key="i" src="../assets/img/rudy.jpg" alt="">
          <div class="melange__desc">
            <div class="melange__container">
            <h2>1993</h2>
            <h3>RUDY GIULANI</h3>
            <p>Élu maire de New York, il met en place un programme <br> de “nettoyage de la ville”. Les souterrains connaissent un grand nombre de descentes policières </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      let melangeContainer = document.querySelector('.melange__desc')

      let positions = []

      let center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      }


      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      let melange = document.querySelector('melange')
      let images = document.querySelectorAll('.melange img');



      images.forEach(image => {

        let randomX = getRandomIntInclusive(-30, 30)
        let randomY = getRandomIntInclusive(-30, 30)
        let randomDeg = getRandomIntInclusive(0, 360)

        positions.push({
          randomX,
          randomY,
          randomDeg
        })
        image.style.transform = " rotate(" + randomDeg + "deg) translate(" +
          randomX + "%," + randomY + "%)"
        image.style.width = window.innerWidth / 6 + "px"


      });

      if (images[0].offsetLeft < center.x) {
        images[0].style.transform = 'translate(' + positions[0].randomX + ',' + positions[0].randomY + ')'
      }



      // Get all horizontal scroll element
      var horizontals = document.querySelectorAll(".melange__section--horizontal");

      // For each horizontal scroll element, apply the effect
      horizontals.forEach(function (horizontal) {
        // Get the inner element
        var inner = horizontal.querySelector(".melange__section__inner");

        // When the user scroll and an animation frame is available
        window.addEventListener("scroll", function () {
          window.requestAnimationFrame(function () {
            // The distance to scroll inside the horizontal element
            // is its height - the window's height
            var toGo = horizontal.offsetHeight - window.innerHeight;

            // The scroll position inside the element
            // is the scroll position - the element's distance from the top
            var position = window.scrollY - horizontal.offsetTop;

            // The progression between 0 & 1 is the scroll position
            // inside the element divided by the distance to scroll
            var progression = position / toGo;

            // If progression is between 0 & 1 that means we are viewing
            // the section so fix it
            if (progression > 0 && progression < 1) {


              melangeContainer.classList.add('melange__desc--isReached')




              images.forEach((image, index) => {

                if (image.offsetLeft < center.x && image.offsetTop < center.y) {
                  image.style.transform = 'rotate(' + positions[index].randomDeg + 'deg) translate(' + (
                      positions[index].randomX + progression *
                      100) +
                    '%,' + (positions[index]
                      .randomY + progression * 100) + '%)'
                }
                if (image.offsetLeft > center.x && image.offsetTop > center.y) {
                  image.style.transform = 'rotate(' + positions[index].randomDeg + 'deg) translate(' + (
                      positions[index].randomX - progression *
                      100) +
                    '%,' + (positions[index]
                      .randomY - progression * 100) + '%)'
                }

                if (image.offsetLeft > center.x && image.offsetTop < center.y) {
                  image.style.transform = 'rotate(' + positions[index].randomDeg + 'deg) translate(' + (
                      positions[index].randomX - progression *
                      100) +
                    '%,' + (positions[index]
                      .randomY + progression *
                      100) + '%)'
                }
                if (image.offsetLeft < center.x && image.offsetTop > center.y) {
                  image.style.transform = 'rotate(' + positions[index].randomDeg + 'deg) translate(' + (
                      positions[index].randomX + progression *
                      100) +
                    '%,' + (positions[index]
                      .randomY - progression *
                      100) + '%)'
                }

              });

              horizontal.classList.add("melange__section--isFixed");
            } else {
              // Don't fix it
              horizontal.classList.remove("melange__section--isFixed");
              melangeContainer.classList.remove('melange__desc--isReached')
            }

            // If the progression is above 1 that means the
            // section has been completly scrolled
            if (progression >= 1) {
              horizontal.classList.add("melange__section--isScrolled");
              melangeContainer.classList.add('melange__desc--isReached')

              images.forEach((image, index) => {

                if (image.offsetLeft < center.x && image.offsetTop < center.y) {
                  image.style.transform = 'rotate(' + positions[index].randomDeg + 'deg) translate(' + (
                      positions[index].randomX +
                      100) +
                    '%,' + (positions[index]
                      .randomY + 100) + '%)'
                }
                if (image.offsetLeft > center.x && image.offsetTop > center.y) {
                  image.style.transform = 'rotate(' + positions[index].randomDeg + 'deg) translate(' + (
                      positions[index].randomX - 100) +
                    '%,' + (positions[index]
                      .randomY - 100) + '%)'
                }

                if (image.offsetLeft > center.x && image.offsetTop < center.y) {
                  image.style.transform = 'rotate(' + positions[index].randomDeg + 'deg) translate(' + (
                      positions[index].randomX -
                      100) +
                    '%,' + (positions[index]
                      .randomY +
                      100) + '%)'
                }
                if (image.offsetLeft < center.x && image.offsetTop > center.y) {
                  image.style.transform = 'rotate(' + positions[index].randomDeg + 'deg) translate(' + (
                      positions[index].randomX +
                      100) +
                    '%,' + (positions[index]
                      .randomY -
                      100) + '%)'
                }

              });

            } else {
              horizontal.classList.remove("melange__section--isScrolled");
            }
          });
        });
      });
    }
  };
</script>