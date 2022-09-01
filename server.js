const express = require ('express');
const app = express();
const path = require('path');
const morgan = require('morgan')

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))

app.get('/',(req,res)=>{


    res.contentType('text/html');
    res.status(200);
    res.sendFile(path.join(__dirname,'./public/html/index.html'))

})


app.listen(80,()=>{
    console.log('server is running faster and better than my your life');
});