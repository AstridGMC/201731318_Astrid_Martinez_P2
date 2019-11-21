//frameworks
const express= require('express');
const app = express();
const path = require('path');
var publicPath = path.resolve(__dirname, 'public');

//configuracion 
app.set('view engine', 'ejs');
app.set('port', 3000);
app.set('views',path.join( __dirname+'/views'));

//escucha
app.listen(app.get('port'), () =>{
    console.log('escuchando en el puerto ', app.get('port'))
})

//routes
app.use(require( './routes/index' ));
app.use(express.static(publicPath)); 