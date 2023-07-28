const express = require('express');

const { v4 } = require('uuid');

app.get('/api', (req, res) => {

  res.end(`Hello!`);
});

module.exports = app;