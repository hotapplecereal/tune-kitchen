<template>
  <div>
    <div v-for="song in songs" v-bind:key="song.id">
      <hr>
      <div class="song">
        <p>{{song.name}}</p>
        <!-- menu -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SongsList',
  props: {
    songs: Array
  },
}
</script>
