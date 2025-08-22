import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faStar, faTrophy, faTimeline, faTShirt, faMagic, faArrowRight, faEnvelope, faPhone, faLocationDot,
  faCogs, faCheckCircle, faMoneyBillWave, faClock
} from '@fortawesome/free-solid-svg-icons'
import { faFaceSmileBeam, faGem } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faInstagram, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons'

library.add(
  faStar, faTrophy, faFaceSmileBeam, faGem, faTimeline, faTShirt,
  faMagic, faTwitter, faInstagram, faDribbble, faBehance, faArrowRight,
  faEnvelope, faPhone, faLocationDot, faCogs, faCheckCircle, faMoneyBillWave,
  faClock
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
