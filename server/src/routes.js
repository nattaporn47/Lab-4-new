// src/routes.js
const PopularController = require('./controllers/PopularController')

module.exports = (app) => {
    app.get('/PopularMenu', PopularController.index)
    app.post('/PopularMenu', PopularController.create)
    app.put('/PopularMenu/:popularId', PopularController.put)
    app.delete('/PopularMenu/:popularId', PopularController.remove)
}