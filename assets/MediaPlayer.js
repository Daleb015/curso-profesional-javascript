function MediaPlayer (config) {
  this.media = config.el
  this.plugins = config.plugins || []
  this._initPlugins()
}

MediaPlayer.prototype.play = function () {
  this.media.play()
}

MediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach(plugin => {
    plugin.run(this)
  })
}

MediaPlayer.prototype.pause = function () {
  this.media.pause()
}

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play()
  } else {
    this.pause()
  }
}

MediaPlayer.prototype.muting = function () {
  if (this.media.muted) {
    this.unmute()
  } else {
    this.mute()
  }
}

MediaPlayer.prototype.mute = function () {
  this.media.muted = true
}

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false
}

export default MediaPlayer
