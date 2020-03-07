const express = require('express');
const app = express()
const path = require('path');
const ejs  = require('ejs');

const PORT = process.env.PORT || 5000;

//Set a static folder

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));


app.get('/', (req, res) => {
     
    const otherstuff = "This is otherstuff to pass dynamically..."
    res.render("home", { stuff: otherstuff });

});











app.listen(PORT, () => console.log('Server is listening on port '+ PORT));
