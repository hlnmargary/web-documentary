<template>
  <div>

    <div v-for="profile in profiles" :key="profile._id">
      <p> {{ profile.name }} </p>
      <router-link :to="{name: 'editform', params: { id: profile._id }}" class="btn btn-primary">Edit</router-link>

      <button @click.prevent="deletePost(profile._id)">Delete</button>
      <hr>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        profiles: {}
      };
    },
    created() {
      let uri = 'http://localhost:4000/profiles';
      this.axios.get(uri).then(response => {
        this.profiles = response.data;
      });
    },
    methods: {
      deletePost(id) {
        let uri = `http://localhost:4000/profiles/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.profiles.splice(this.profiles.findIndex(i => i._id == id), 1);
        });
      }
    }
  };
</script>