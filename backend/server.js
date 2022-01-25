let express = require('express'),
mongoose = require('mongoose'),
cors = require('cors'),
bodyParser = require('body-parser'),
dbconfig = require('./config/db');

// connection with mongodb 
mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.db,{
    useNewUrlParser: true
}).then(()=>{
    console.log('Database connection established')
},
error => {
    console.log('database not established'+error)
})



const userRoute = require('./routes/user.route');
const bookRoute = require('./routes/book.route');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/users',userRoute);
app.use('/api/books',bookRoute);

const port = process.env.PORT || 4100;
const server = app.listen(port, ()=>{
    console.log('listening on port'+port);
});

app.use((req, res, next) => {
    next(createError(404));
})

app.use(function(err,req,res,next){
    console.log(err.message); // message d'erreur console server
    if(!err.statusCode) err.statusCode = 500; // si l'erreur n'est pas specifique
    res.status(err.statusCode).send(err.message); // envoyer message d'erreur avec le statut 
})