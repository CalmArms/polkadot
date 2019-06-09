const polka = require('polka')
const sirv = require('sirv')

const app = polka()

// mount the static files
const assets = sirv('./src/public/assets', { dev: true })
app.use(assets)

// mount routes
const routes = require('./src/routes')
routes.mount(app)

// start the server
app.listen(3000, err => {
    if (err) throw err
    console.log('> Running on localhost:3000')
})