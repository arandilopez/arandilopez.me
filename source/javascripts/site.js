import Vue from 'vue/dist/vue'

new Vue({
  el: '#app',
  data: {
    menuOpen: false
  },
  methods: {
    toggleMenu () {
      if (this.menuOpen) {
        this.menuOpen = false
        document.body.classList.remove('scrolling-auto', 'overflow-hidden', 'fixed', 'pin-x')
      } else {
        this.menuOpen = true
        document.body.classList.add('scrolling-auto', 'overflow-hidden', 'fixed', 'pin-x')
      }
    }
  }
})
