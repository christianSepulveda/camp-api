import express from "express";

const app = express()

app.listen(5001, () => console.log('App Listen in Port:5001'))

app.get('/', (req, res) => res.json('App Running'))