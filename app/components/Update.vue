<template>
  <div>
    <form @submit.prevent="updateProfile">
      <input type="text" v-model="profile.name">
      <input type="submit">
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      profile: {}
    };
  },
  mounted() {
      let uri = `http://localhost:4000/profiles/getProfile/${this.$route.params.id}`;
      this.axios.get(uri).then(response => {
        this.profile = response.data;
      });
  },
  methods: {
    updateProfile() {
      let uri = `http://localhost:4000/profiles/update/${this.$route.params.id}`;
      this.axios.post(uri, this.profile).then(() => {
        this.$router.push({name: 'profile'});
      })
    }
  }
};
</script>
