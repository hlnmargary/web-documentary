<template>
  <div>
    <section class="create">
      <h1>Back Office - Nouveau profil</h1>
      <form @submit.prevent="addProfile">
        <div class="forms">
          <label class="label">Nom</label>
          <input type="text" v-model="profile.name">
        </div>
        <div class="forms">
          <label>Image de la carte</label>
          <input type="text" v-model="profile.cardImage">
        </div>
        <div class="forms">
          <label>Texte de la carte</label>
          <input class="cardContent" type="text" v-model="profile.cardContent">
        </div>
        <div class="forms">
          <label>ID Vimeo</label>
          <input type="number" v-model="profile.vimeoId">
        </div>
        <div class="forms">
          <label>Position X sur la map</label>
          <input type="number" v-model="profile.XPos">
        </div>
        <div class="forms">
          <label>Position Y sur la map</label>
          <input type="number" v-model="profile.YPos">
        </div>
        <div class="forms">
          <label>Popup - Introduction</label>
          <input class="introduction" type="text" v-model="profile.intro">
        </div>
        <div class="forms">
          <label>Popup - Premier titre</label>
          <input type="text" v-model="profile.firstArticleTitle">
        </div>
        <div class="forms">
          <label >Popup - Premier paragraphe</label>
          <input class="firstParagraph" type="text" v-model="profile.firstArticleContent">
        </div>
        <div class="forms">
          <label>Popup - Second Titre </label>
          <input type="text" v-model="profile.secondArticleTitle">
        </div>
        <div class="forms">
          <label>Popup - Second paragraphe</label>
          <input class="secondParagraph" type="text" v-model="profile.secondArticleContent">
        </div>
        <div class="forms">
          <label>Popup - Texte de fin</label>
          <input type="text" v-model="profile.outside">
        </div>
        <div>
        <div class="submit">
          <input class="submitContainer" type="submit">
        </div>
      </form>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      profile: {}
    };
  },
  methods: {
    addProfile() {
      let uri = "http://localhost:4000/profiles/create";
      this.axios.post(uri, this.profile).then(() => {
        this.$router.push({
          name: "map"
        });
      });
    }
  }
};
</script>