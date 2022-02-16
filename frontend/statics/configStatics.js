module.exports = app =>{
    let index = function(req, res, next) {
        return res.render('/index');
      };

      return index
}