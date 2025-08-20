import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faTrophy, faTimeline, faTShirt, faMagic } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmileBeam, faGem } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { defineNuxtPlugin } from 'nuxt/app'

library.add(faStar, faTrophy, faFaceSmileBeam, faGem, faTimeline, faTShirt, faMagic, faTwitter)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
