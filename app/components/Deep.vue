<template>
  <div>
    <section class="end__section end__section--horizontal">
      <div class="end__section__inner">
        <div class="end">
          <img v-for="i in 10 " :key="i" src="../assets/img/img2.jpg" alt="">

          <div class="end__text">
            <p>La police expulse les sans-abris les plus accessibles mais les habitants des niveaux inférieurs, cachés,
              restent pronfondément terrés</p>
          </div>
          <router-link class="next__chapter" to="/map">
            <p>Accéder au prochain chapitre</p>
          </router-link>
          <div class="next__anim"></div>

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
      let images = document.querySelectorAll('.end img')
      let stroke = document.querySelector('.next__anim')
      let text = document.querySelector('.end__text')
      let nextChapter = document.querySelector('.next__chapter')

      var horizontals = document.querySelectorAll(".end__section--horizontal");

      horizontals.forEach(function (horizontal) {
        var inner = horizontal.querySelector(".end__section__inner");
        window.addEventListener("scroll", function () {
          window.requestAnimationFrame(function () {
            var toGo = horizontal.offsetHeight - window.innerHeight;
            var position = window.scrollY - horizontal.offsetTop;
            var progression = position / toGo;

            if (progression > 0 && progression < 1) {

              horizontal.classList.add("end__section--isFixed");

              images.forEach((element, index) => {
                if (progression * 100 >= index * 10) {
                  element.style.zIndex = index
                  element.style.width = 100 - index * 5 + '%'
                } else {
                  element.style.zIndex = -10
                }
              });

            } else {
              horizontal.classList.remove("end__section--isFixed");
            }
            if (progression >= 1) {
              nextChapter.classList.add('next__chapter--isReached')
              stroke.classList.add('next__anim--isReached')
              text.classList.add('end__text--isReached')
              images.forEach((element, index) => {
                if (progression * 100 >= index * 10) {
                  element.style.zIndex = index
                  element.style.width = 100 - index * 5 + '%'
                }
              });

              horizontal.classList.add("end__section--isScrolled");

            } else {
               nextChapter.classList.remove('next__chapter--isReached')
                 stroke.classList.remove('next__anim--isReached')
              horizontal.classList.remove("end__section--isScrolled");
              text.classList.remove('end__text--isReached')

            }
          });
        });
      });
    }
  };
</script>