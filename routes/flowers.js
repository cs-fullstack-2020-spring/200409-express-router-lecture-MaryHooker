//routes for flowers

//Create a router
let express = require('express');
let router = express.Router();

//Read Flowers in CRUD
router.get('/successMessage/:id',(req,res)=>{
    res.send(`${req.params.id} flower has been accessed via get request`)
});

//Create Flowers in CRUD
router.post('/successMessage/:id',(req,res)=>{
    res.send(`${req.params.id} flower has been accessed via post request`)
});

//Make these paths accessible
module.exports = router;