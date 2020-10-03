const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 7010;
const morgan = require('morgan');

const app = express();
app.use(cors({origin : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
//endpoint api
const todoRoute = require('./route/todo.routes')

app.use('/rest/api/v1/todo', todoRoute);

app.listen(port, function(){
    console.log('Express runing localhost:'+port);
})
