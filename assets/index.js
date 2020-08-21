import MediaPlayer from './MediaPlayer.js'
import AutoPlay from '../plugins/AutoPlay.js'

const video = document.querySelector('video')
const button = document.querySelector('button')
const mudo = document.getElementById('mudo')

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay()]
})

button.onclick = () => player.togglePlay()
mudo.onclick = () => player.muting()
