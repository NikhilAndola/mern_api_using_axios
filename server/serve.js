// Importing express module
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(express.json());
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let val1;
let val2;
let val3;
 
app.post('/piddu', (req, res) => {
    console.log(req.body)
    console.log("my query ",req.query)
  let { username, age } = req.body;
  let { authorization } = req.headers;
  val1 = username;
  val2 = age;
  console.log("username and password", username, age)
  // res.send({
  //   username,
  //   password,
  //   authorization,
  // });
});

app.get('/qwerty', (req, res) => {
  res.send({
    val1,val2,val3
  });
})
 
app.listen(9000, () => {
  console.log('Our express server is up on port 9000');
});