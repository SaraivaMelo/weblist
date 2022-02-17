const express = require('express')
const cors = require('cors')

module.exports = function(app){
    app.use(cors())
    return { cors}
}