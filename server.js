require('dotenv').config()
const express = require("express");
const proxy = require('express-http-proxy')
const bodyParser = require('body-parser')
const fetch = require("node-fetch")
const app = express();
const port = 5000;


app.get('/rovers/:name', async (req,res) => {
  const response = await fetch (`https://api.nasa.gov/mars-photos/api/v1/manifests/${req.params.name.toLowerCase()}?api_key=${process.env.API_KEY}`)
  .then(res => res.json())
  return res.send ({ response })
});

// app.get("/getRoverdata", (req,res) => res.send ("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


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
