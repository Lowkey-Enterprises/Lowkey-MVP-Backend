const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userModel = require('./models/userModel');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());

// simple route to test server is working
app.get('/ping', (req, res) => {
  res.send('pong');
});

// router
app.use('/users', userRoutes);

// seed test user
userModel.createUser({
  id: 'test-id',
  name: "Jonah",
	email: "test@lowkey.com",
	phoneNumber: "1234567890",
	zipCode: "12345",
	dob: "01012004",
	careCircle: [
		"raleigh-id",
		"louis-id"
	],
});

userModel.createUser({
  id: 'raleigh-id',
  name: "Raleigh",
	email: 'raleigh@lowkey.com',
	phoneNumber: "1234567890",
	zipCode: "12345",
	dob: "01012004",
	careCircle: [
		"test-id"
	],
});

userModel.createUser({
  id: 'louis-id',
  name: "Louis",
	email: "louis@lowkey.com",
	phoneNumber: "1234567890",
	zipCode: "12345",
	dob: "01012004",
	careCircle: [
		"test-id"
	],
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}...`);
});