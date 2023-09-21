const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://ki3ani:xqXKPcBRAPVMnsbL@taskmanagercluster.qwdbs9a.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB Atlas'));

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://52.91.41.160:${PORT}`);
});

