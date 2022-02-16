module.exports = app =>{
    app.route('/')
        .get(statics.configStatics.index)

}