import 'saika/dist/saika.css'
import Saika from 'saika'
import '../src/style.css'
import { createToast, destoryAllToasts } from '../src'

new Saika({
  target: 'app',
  theme: 'readme',
  nav: [
    {
      title: 'GitHub',
      link: 'https://github.com/evillt/toast'
    }
  ],
  router: {
    mode: 'history'
  },
  postMixins: [
    {
      mounted() {
        createToast('Love this toast?', {
          action: {
            text: 'YES'
          }
        })
      },
      methods: {
        destoryAllToasts,

        selfDestory() {
          createToast('Hello world', {
            timeout: 2000
          })
        },

        action() {
          createToast('Hello world', {
            action: {
              text: 'Awesome!',
              callback(toast) {
                console.log('You just closed me.')
                toast.destory()
              }
            }
          })
        },

        withType(type) {
          createToast('Hello world', {
            timeout: 2000,
            type
          })
        }
      }
    }
  ]
})
