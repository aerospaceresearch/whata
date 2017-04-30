<template>
  <div class="water-map">
    <div id="map"></div>
  </div>
</template>

<script>
var L = require('leaflet')
L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/'

export default {
  name: 'WaterMap',

  mounted () {
    this.map = L.map('map')
    this.map.setView([48.7611542, 9.1943309], 13)
    this.map.scrollWheelZoom.disable()

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map)
  },

  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~leaflet/dist/leaflet.css";
#map {
  height: 600px;
  z-index: 5;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
