<template>
  <div>
    <div class="profile" v-for="profile in profiles" :key="profile._id">
      <h2 class="name">Nom: {{ profile.name }}</h2>
      <!-- <div>
      <h1> Carte </h1>
      <h2 class="name">Background de la card: {{ profile.card.image }}</h2>
      <h2 class="name">Texte de la card: {{ profile.card.content }}</h2>
      </div>
       <div>
      <h1> Position </h1>
      <h2 class="name">X: {{ profile.mapPosition.x }}</h2>
      <h2 class="name">Y: {{ profile.mapPosition.y }}</h2>
      </div>
      <h2 class="name">Vidéo Youtube: {{ profile.pageVideo.youtubeUrl }}</h2>
      <h2 class="name">Titre du premier article: {{ profile.firstArticle.title }}</h2>
      <h2 class="name">Content du premier article: {{ profile.firstArticle.paragraph }}</h2>
      <h2 class="name">Titre du deuxième article: {{ profile.secondArticle.title }}</h2>
      <h2 class="name">Content du deuxième article: {{ profile.secondArticle.paragraph }}</h2> -->
      

      <router-link class="edit" :to="{name: 'update', params: {id: profile._id}}"> 
        Edit
      </router-link>

      <button @click.prevent="deleteProfile(profile._id)" class="edit"> 
        Delete
      </button>
    </div> 
  </div>
</template>


<script>

  export default {
    data() {
      return {
        profiles: [],
      }
    },
    mounted() { 
      let uri = 'http://localhost:4000/profiles';
      this.axios.get(uri).then(response => {
        this.profiles = response.data;
      });
    },
    methods: {
      deleteProfile(id) {
        let uri = `http://localhost:4000/profiles/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.profiles.splice(this.profiles.findIndex(i => i._id == id), 1)
        })
      }
    }
  }

</script>
