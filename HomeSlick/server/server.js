const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());                           /* This allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This allows JSON Objects with strings and arrays*/
app.use(cors({
    //cors is going to allow different ports to send requests to our API
    origin: "http://localhost:3000",
}));
require('./config/mongoose.config');
require('./routes/house.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

