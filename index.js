const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const port = 5000;
app.listen(port, function(){
    console.log("Listening port 5000");
});