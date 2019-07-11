<template>
  <div class="scroll">
    <div class="scroll--item">
      <div class="scroll__item--pop"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    var scrollBar = document.querySelector('.scroll');
    if (window.scrollY < window.innerHeight) {
      window.addEventListener('scroll', function() {
        scroll = ((window.innerHeight + 500 - window.scrollY*4) / window.innerHeight)
        scrollBar.style.opacity = `${scroll}`;
      })
    }
  }
}
</script>


