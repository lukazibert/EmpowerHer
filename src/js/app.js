const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')

var cookieParser = require('cookie-parser');

const app = express() // initialize app

app.use(cookieParser());


const config = {
    views: 'views', // Set views directory
    static: 'public', // Set static assets directory
    logging: true,
    // db: vertex.nedb()
}

vertex.configureApp(app, config)

module.exports = app
