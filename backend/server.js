require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const covidDataRoutes = require('./routes/covidDataRoutes');

app.use(express.json());

app.use('/api/v1/mdcovidvac', covidDataRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
