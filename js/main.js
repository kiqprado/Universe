import '../styles/base.css'
import '../styles/nav.css'
import '../styles/content.css'

import { Router } from './router.js'

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/about', '/pages/about.html')
router.add('/explore', '/pages/explore.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
