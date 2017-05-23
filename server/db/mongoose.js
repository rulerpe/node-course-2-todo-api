var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost:'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://rulerpe:ddddffff@ds149431.mlab.com:49431/nodetodoapiapp'
}
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect(db.mlab || db.localhost);

module.exports = {mongoose};
