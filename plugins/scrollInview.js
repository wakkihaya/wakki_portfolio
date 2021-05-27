import Vue from 'vue'

Vue.directive('scroll-inview', {
  bind(el, binding) {
    if (!binding.arg) return

    const Mudule = require(`~/assets/js/anime/${binding.arg}`).default
    binding.customAnime = new Mudule(el, binding.value)
  },
  inserted: function (el, binding) {
    const f = function () {
      const top = el.getBoundingClientRect().top
      const wh = window.innerHeight

      if (wh / 4 * 3 > top) {
        if (binding.customAnime) binding.customAnime.anime()
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
