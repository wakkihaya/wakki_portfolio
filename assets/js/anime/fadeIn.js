import { TweenMax } from 'gsap'

export default class {
  constructor(el) {
    this.el = el

    this.init()
  }

  init() {
    TweenMax.set(this.el, {
      alpha: 0
    })
  }

  anime() {
    TweenMax.to(this.el, 0.4, {
      alpha: 1
    })
  }
}
