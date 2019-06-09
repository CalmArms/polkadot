const path = require('path')
const send = require('send')

function view(name) {
    name = name.replace('.', '/')
    return path.join(__dirname, 'public/views', `${name}.html`)
}

module.exports.mount = function(app) {

    app.get('/', (req, res) => {
        send(req, view('home')).pipe(res)
    })

    app.get('/about', (req, res) => {
        send(req, view('child.about')).pipe(res)
    })
    
}