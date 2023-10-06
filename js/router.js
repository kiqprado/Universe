export class Router {
  routes = {}

  add(routeName, pages) {
    this.routes[routeName] = pages
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    const backgroundPath = this.getBackgroundPath(pathname)
    this.changeBackground(backgroundPath)

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
  }

  getBackgroundPath(pathname) {
    let backgroundPath = '../assets/backgrounds/mountains01.png'

    if (pathname === '/about') {
      backgroundPath = '../assets/backgrounds/mountains02.png'
    } else if (pathname === '/explore') {
      backgroundPath = '../assets/backgrounds/mountains03.png'
    }

    return backgroundPath
  }

  changeBackground(backgroundPath) {
    document.body.style.background = `url(${backgroundPath}) no-repeat center center/cover`
  }
}
