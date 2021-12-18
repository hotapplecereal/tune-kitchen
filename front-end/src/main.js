import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  currentSongID: 2,
  currentTagID: 2,
  songs: [{
    id: 1,
    name: 'Grace Kelly',
    artist: 'Mika',
    tags: ['Poppy'],
  }],
  tags: [{
    id: 1,
    name: 'Poppy',
  }],
  getSong(songID) {
    return this.songs[this.songs.findIndex(s => s.id == songID)];
  },
  getTag(tagID) {
    return this.tags[this.tags.findIndex(s => s.id == tagID)];
  },
  getSongs() {
    return this.songs;
  },
  getSongsByTag(tagID) {
    var tag = this.getTag(tagID);
    return this.songs.filter(song => song.tags.includes(tag.name));
  },
  getTags() {
    return this.tags;
  },
  getTagsBySong(songID) {
    var song = this.getSong(songID);
    return song.tags;
  },
  addSong(name, artist, tags) {
    this.songs.push({
      id: this.currentSongID,
      name: name,
      artist: artist,
      tags: tags,
    });
    this.currentSongID += 1;
    for (let i = 0; i < tags.length; i++)
    {
      if (!this.tags.includes(tags[i].name)) {
        this.addTag(tags[i].name);
      }
    }
  },
  addTag(name) {
    this.tags.push({
      id: this.currentTagID,
      name: name,
    });
    this.currentTagID += 1;
  },
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
