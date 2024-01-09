// import modules

import express from 'express'

// create Express app
import { songs } from './data/lane8-music.js'

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')



// Mount routes
app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/songs', function(req, res) {
  res.render('songs/index', {
    songs: songs
  })
})



// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})