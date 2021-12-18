<template>
  <div class="song">
    <h1>Add a Song</h1>
    <form v-if="creating" @submit.prevent="addSong">
      <input v-model="name" placeholder="Name">
      <p></p>
      <input v-model="artist" placeholder="Artist">
      <p></p>
      <textarea v-model="tags" placeholder="Tags (seperated by commas)"></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
    <div v-else>
      <p>Thank you for adding a song!</p>
      <p><a @click="toggleForm" href="#">Add another song</a></p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Song',
  data() {
    return {
      creating: true,
      name: '',
      artist: '',
      tags: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addSong() {
      var makeTags = this.tags.split(',');
      this.$root.$data.addSong(this.name, this.artist, makeTags);
      this.name = "";
      this.artist = "";
      this.creating = false;
    },
  },
}
</script>

<style scoped>
  input {
    font-size: 1.2em;
    height: 30px;
    width: 200px;
  }

  textarea {
    font-size: 1.6em;
    width: 100%;
    max-width: 500px;
    height: 100px;
  }

  button {
    margin-top: 20px;
    font-size: 1.2em;
  }
</style>
