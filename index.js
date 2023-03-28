const express = require('express')
const cors = require('cors')
const category = require('./routes/category')
const { port } = require('./const')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
let db = require('./model/db')
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH', 'OPTIONS']
}));

//Home Route
app.get('/', (req, res) => {
    res.json('Welcome to expense tracker backend')
})
app.use('/category', category)
//Port for the application
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });
app.listen(`${port}`, () => {
    console.log(`Backend started at ${port}`)
})