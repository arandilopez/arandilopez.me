import Vue from 'vue/dist/vue'

if (!window.location.host.match(/localhost/)) {
  Vue.config.productionTip = false
  Vue.config.devtools = false
}

new Vue({
  el: '#app',
  data: {
    menuOpen: false
  },
  methods: {
    toggleMenu () {
      if (this.menuOpen) {
        this.menuOpen = false
        document.body.classList.remove('scrolling-auto', 'overflow-hidden', 'fixed', 'inset-x-0')
      } else {
        this.menuOpen = true
        document.body.classList.add('scrolling-auto', 'overflow-hidden', 'fixed', 'inset-x-0')
      }
    }
  }
})
