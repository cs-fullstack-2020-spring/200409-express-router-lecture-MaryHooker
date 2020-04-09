//routes for trees

//Create a router
let express = require('express');
let router = express.Router();

//Read Trees in CRUD
router.get('/successMessage/:id',(req,res)=>{
    res.send(`${req.params.id} tree has been accessed via get request`)
});

//Create Trees in CRUD
router.post('/successMessage/:id',(req,res)=>{
    res.send(`${req.params.id} tree has been accessed via post request`)
});

//Make these paths accessible
module.exports = router;
