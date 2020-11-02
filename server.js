require('dotenv').config()
const express = require("express");
const proxy = require('express-http-proxy')
const bodyParser = require('body-parser')
const fetch = require("node-fetch")
const app = express();
const port = 5000;


app.get('/rovers/:name', async (req,res) => {
  const response = await fetch (`https://api.nasa.gov/mars-photos/api/v1/rovers/${req.params.name.toLowerCase()}/latest_photos?api_key=${process.env.API_KEY}`)
  .then(res => res.json())
  .catch(console.log)
  return res.send ({ response })

});


// app.get("/getRoverdata", (req,res) => res.send ("Hello World!"));

app.listen(port, () => console.log(`App listening on port ${port}!`))


/** API CALLS **/

app.get('/apod', async (req, res) => {
    try {
        let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
            .then(res => res.json())
        res.send({ response })
    } catch (err) {
        console.log('error:', err);
    }
})



/** helpful study resource; https://dev.to/loujaybee/using-create-react-app-with-express**/
