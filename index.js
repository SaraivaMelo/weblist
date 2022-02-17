const app = require('express')()
app.set('view engine', 'ejs')
const consign = require('consign')

consign()
//Para todas as chamadas then abaixo, o consign vai fazer os requires e aplicar dentro de app

    .then('./frontend/config/middlewares.js') 
    .then('./frontend/statics/configStatics.js', {checkext:false, extlist:['.js','.myextension']})
    .then('./frontend/config/router.js')
    .into(app) // E vai inserir em app. 

app.listen(4000, ()=>{ console.log(`Servidor Rodando...`)})