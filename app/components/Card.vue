<template>
  <article class="card" >
    <div :style="{backgroundImage: `url(${profile.cardImage})`}" v-if="profile">
    <h2> {{ profile.name }} </h2>
    <p> {{ profile.cardContent }} </p>
    </div>
  </article>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props: ["profile"],
};

</script>