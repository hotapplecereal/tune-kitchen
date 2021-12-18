<template>
  <div class="home">
    <h1>Tune Kitchen</h1>
    <div class="form">
      <input v-model="findName" placeholder="Search">
    </div>
    <songs-list :songs="suggestions" />
  </div>
</template>

<script>
import SongsList from '@/components/SongsList.vue'

export default {
  name: 'Home',
  components: {
    SongsList,
  },
  data() {
    return {
      findName: "",
    }
  },
  computed: {
    suggestions() {
      let items = this.$root.$data.getSongs().filter(song => song.name.toLowerCase().startsWith(this.findName.toLowerCase()));
      return items.sort((a, b) => a.name > b.name);
    },
  },
}
</script>

<style scoped>
/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

</style>
