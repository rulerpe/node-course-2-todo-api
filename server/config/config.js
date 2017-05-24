var env = process.env.NODE_ENV || 'development';

console.log('env *******' + env);

if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URL = 'mongodb://localhost:27017/TodoApp';
} else if(env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URL = 'mongodb://localhost:27017/TodoAppTest';
} else {
  process.env.MONGODB_URL = 'mongodb://rulerpe:ddddffff@ds149431.mlab.com:49431/nodetodoapiapp';
}