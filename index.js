const connectToMongoose = require('./db');
const express = require('express');
var cors = require('cors'); //to swtich from localhost 5000 - 3000 
connectToMongoose();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//using routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

//app running on port 3000
app.listen(port, () => {
  console.log(`cloud notes listening at http://localhost:${port}`)
})