const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());



const port = 3001;


app.get('/api/users', (req, res) => {
  console.log('api/users called!')

  const { amount, interest, numOfPayments } = req.params;

  res.json({ message : 'hello' });
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});