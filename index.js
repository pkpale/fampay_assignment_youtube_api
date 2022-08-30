const express = require('express');
const config = require('dotenv');
// const axios = require('axios');
// const apiKey = 'AIzaSyA5QUpisu9mTFTADHcOu_GG4lI5nlEEBO4';
// const baseApiUrl = 'https://www.googleapis.com/youtube/v3'
// https://www.googleapis.com/youtube/v3/search?key=apiKey&type=video&part=snippet&order=date&q=foo

config.config()

// const app = express()

// app.get("/",(req, res) => {
//     res.send("Hello from server");
// });

// app.get("/search", async (req, res) => {
//     const searchQuery = 'basketball';
//     const url = `${baseApiUrl}/search?key=${process.env.GOOGLE_API_KEY}&type=video&part=snippet&q=${searchQuery}&order=date`
//     const response = await axios.get(url);
//     // console.log(`response -> ${response.data.items}`);
//     res.send(response.data.items);
// });

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`server is running on http://${process.env.HOST}:${process.env.PORT}`)
})

