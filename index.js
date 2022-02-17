const express= require('express')
const app = express()
const consign = require('consign')
app.set('view engine', 'ejs')
app.set('views', './frontend/config/partials/views')
app.use(express.static(__dirname + '/public'))


consign()
    .then('./frontend/config/middlewares.js') 
    .then('./frontend/config/router.js')
    .into(app)  

app.listen(4000, ()=>{ console.log(`Servidor Rodando...`)})