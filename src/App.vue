<template>
  <div id="app">
    <router-view></router-view>
    <!-- v-show="$route.meta.showFooter控制是否显示 -->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import { mapActions } from 'vuex'
export default {
  components: {
    FooterGuide
  },
  mounted () {
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  }
}
</script>

<style lang="stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
