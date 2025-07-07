const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const userRoutes = require('./routes/userRoutes');

// simple route to test server is working
app.get('/ping', (req, res) => {
  res.send('pong');
});

// router
app.use('/users', userRoutes);

// seed test user directly via model
const userModel = require('./models/userModel');
userModel.addUser({
  id: 'test-id',
  name: "Jonah",
  email: "test@lowkey.com",
  phoneNumber: "1234567890",
  zipCode: "12345",
  dob: "01012004",
  careCircle: ["raleigh-id", "louis-id"],
  status: 'normal',
});

userModel.addUser({
  id: 'raleigh-id',
  name: "Raleigh",
  email: 'raleigh@lowkey.com',
  phoneNumber: "1234567890",
  zipCode: "12345",
  dob: "01012004",
  careCircle: ["test-id"],
  status: 'normal',
});

userModel.addUser({
  id: 'louis-id',
  name: "Louis",
  email: "louis@lowkey.com",
  phoneNumber: "1234567890",
  zipCode: "12345",
  dob: "01012004",
  careCircle: ["test-id"],
  status: 'normal',
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}...`);
});