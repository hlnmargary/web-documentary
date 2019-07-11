<template>
  <div class="veteran">
    <div class="war">
      <div class="parallax">
        <img class="front" src="../assets/img/img4.jpg" alt="">
      </div>
      <img class="back" src="../assets/img/img3.jpg" alt="">
    </div>
    <div class="veterans__text">
      <p>Au retour de la guerre, des vétérans du Vietnam commencent à investir les tunnels. Ils sont suivis par des centaines d’autres sans-abris, exclus de la société.</p>
      <h2>70's</h2>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    var img = document.querySelector('.front')
    var limit = document.querySelector('.veteran').getBoundingClientRect().top - (2*window.innerHeight) + window.scrollY;
    // console.log(img)

    window.addEventListener('scroll', function() {
      if (window.scrollY > limit && window.scrollY < limit  + (window.innerHeight*3)) {
        let decal = (window.scrollY - limit)/60;
        // console.log(decal)
        img.style.transform = `translateY(-${decal}%)`;
      }
    })

  }
}
</script>

