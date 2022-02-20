module.exports = function(app){
    app.get('/', (req, res)=>{
        res.render('pages/index')
    })
    app.get('/home', (req, res)=>{
        res.render('pages/home')
    })
}