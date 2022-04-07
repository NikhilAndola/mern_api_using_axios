const express = require("express");
const app = express();  //Create new instance
const PORT = process.env.PORT || 5000; //Declare the port number

const cors = require('cors');

app.use(cors({
    origin: '*'
}));

//Define the endpoint
app.get("/aspectratio", (req, res) => {  

        const url = req.query.url;
        const name = req.query.name;

        let mango = [1,2,3,4];

        if(mango.length > 0){

            return res.send({
                    imageDetail: url,
                    arr2: mango,
                    namedetail: name
            
            });
        } else {
            return res.send({status: 404})
        }
});


app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    console.log("take query",req.query)
    console.log("axios data", req.data)
    res.sendStatus(200);
});



app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});