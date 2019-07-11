<template>
  <div>
    <section id="zoom" class="zoom__section zoom__section--horizontal">

      <div class="zoom__section__inner">

        <div class="zoom">

          <div class="zoom__desc">
            <h1>Manhattan</h1>
            <h2>NEW YORK</h2>
            <p class="zoom__content">" Ils ont enlevé les bancs publics pour qu'on ne dorme pas dessus. Où voulez-vous
              qu'ils dorment, les sans-abris, s'ils ne descendent pas dans les tunnels ? "</p>
          </div>
          <div class="zoom__final">
            <p>
              La ville cache sous ses trottoirs un labyrinthe de couloirs sombres et humides. Anciens métros désaffectés, bouches d’égouts et tunnels s'enfoncent sur plusieurs niveaux à plus de 30 mètres de profondeur. Ces souterrains accueillent une population "d’invisibles" venus se réfugier dans l’obscurité, loin des regards indiscrets.
            </p>
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
      // Get all horizontal scroll element
      var horizontals = document.querySelectorAll(".zoom__section--horizontal");
      let zoom = document.querySelector('.zoom');
      let zoomDesc = document.querySelector('.zoom__desc')
      let zoomFinal = document.querySelector('.zoom__final')

      // For each horizontal scroll element, apply the effect
      horizontals.forEach(function (horizontal) {
        // Get the inner element
        var inner = horizontal.querySelector(".zoom__section__inner");

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
              zoomDesc.style.visibility = 'visible'
              horizontal.classList.add("zoom__section--isFixed");

              zoom.style.backgroundSize = progression * 100 + window.innerWidth + "px";
              zoomDesc.style.transform = 'translateY(' + -progression * zoom.offsetHeight * 2 + 'px)'
              zoomFinal.style.transform = 'translate(50%,' + -progression * zoom.offsetHeight * 2 + 'px)'
            } else {
              // Don't fix it
              horizontal.classList.remove("zoom__section--isFixed");
              zoomDesc.style.visibility = 'hidden'

              // zoomFinal.style.bottom = '50%';
              // zoomFinal.style.right = '50%';
              // zoomFinal.style.transform = 'translate(50%,50%)'
        
            }

            // If the progression is above 1 that means the
            // section has been completly scrolled
            if (progression >= 1) {
              horizontal.classList.add("zoom__section--isScrolled");
              zoomFinal.style.transform = 'translate(50%,' + -zoom.offsetHeight * 2 + 'px)'; 
              // zoom.style.backgroundSize = 100 + window.innerWidth + "px";

            } else {
              horizontal.classList.remove("zoom__section--isScrolled");
            }
          });
        });
      });
    }
  };
</script>