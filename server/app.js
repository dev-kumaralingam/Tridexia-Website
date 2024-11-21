const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});