// //20-04-09 Express Router Lecture

// //Create point of entry
// let express = require('express');
// let app = express();
// //variable for port number
// let port = 8000;

// //import router modules
// let flowers = require('./routes/flowers.js');
// let trees = require('./routes/trees.js');

// //mount routes
// app.use('/flowers',flowers);
// app.use('/trees',trees);

// //Add listener
// app.listen(port,()=>{
//     console.log(`Listening on port ${port}`)
// });

//********************************************************************** */

//REVIEW

//create entry point
let express = require('express');
let app = express();

//create prot variable
let port = 2112;

//import json in express
app.use(express.json());

//listen on port
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
});

//sanity
app.get('/test',(req,res)=>{
    res.send(`Hello World`)
});

//import router modules
let flowers = require('./routes/flowers.js');
let trees = require('./routes/trees.js');

//mount routes
app.use('/flowers',flowers);
app.use('/trees',trees);


