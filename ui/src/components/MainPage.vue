<template>
  <div class="main-page">
    <div class="phone-viewport">
      <md-toolbar>
        <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="whata-logo whata-logo-small"></span>
        <h2 class="md-title">Whata <span class="md-subheading">save the planet - classify water</span></h2>
  
        <span style="flex: 1;"></span>
        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>
  
        <md-button class="md-icon-button">
          <md-icon>filter_list</md-icon>
        </md-button>
      </md-toolbar>
  
      <div>
        <WaterMap></WaterMap>
      </div>
  
      <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container">
            <h3 class="md-title">Sidenav content</h3>
          </div>
        </md-toolbar>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
      </md-sidenav>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import WaterMap from '@/components/WaterMap.vue'

export default {
  name: 'MainPage',
  components: { Header, WaterMap },

  data() {
    return {
    }
  },

  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
}
</script>

<style scoped>
.whata-logo {
  background: url('../assets/logo_whata.svg') top left;
  background-size: cover;
  display: inline-block;
}

.whata-logo-small {
  width: 50px;
  height: 55px;
}
</style>
