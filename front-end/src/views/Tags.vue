<template>
  <div>
    <h1>Tags</h1>
    <div v-for="tag in tags" v-bind:key="tag.id">
      <hr>
      <div class="tag">
        <button @click="clicked(tag)">{{tag.name}}</button>
        <songs-list v-if="clickedTag == tag" :songs="taggedSongs"/>
      </div>
    </div>
  </div>
</template>

<script>
import SongsList from '@/components/SongsList.vue'

export default {
  name: 'Tags',
  data() {
    return {
      clickedTag: null,
    }
  },
  components: {
    SongsList,
  },
  computed: {
    tags() {
      return this.$root.$data.getTags();
    },
    taggedSongs() {
      if (this.clickedTag == null)
      {
        return null;
      }
      else {
        let songs = this.$root.$data.getSongsByTag(this.clickedTag.id)
        return songs.sort((a, b) => a.name > b.name);
      }
    },
  },
  methods: {
    clicked(tag) {
      if (this.clickedTag == null) {
        this.clickedTag = tag;
      }
      else {
        this.clickedTag = null;
      }
    },
  }
}
</script>

<style scoped>
  .tag {
    width: 100%;
    height: 30px;
  }
  button {
    width: 100%;
    height: 100%;
  }
</style>
