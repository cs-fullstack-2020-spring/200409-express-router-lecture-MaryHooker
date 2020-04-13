// //routes for flowers

// //Create a router
// let express = require('express');
// let router = express.Router();

// //Read Flowers in CRUD
// router.get('/successMessage/:id',(req,res)=>{
//     res.send(`${req.params.id} flower has been accessed via get request`)
// });

// //Create Flowers in CRUD
// router.post('/successMessage/:id',(req,res)=>{
//     res.send(`${req.params.id} flower has been accessed via post request`)
// });

// //Make these paths accessible
// module.exports = router;

//********************************************************************/
//Extra Practice

//create router in express using express.Router
let express = require('express');
let router = express.Router();

//Create in CRUD
router.post('/',(req,res)=>{
    req.body.status = 'CREATED';
    res.send(req.body);
})

//Read in CRUD
router.get('/:plant_id',(req,res)=>{
    res.send(`The plant id is ${req.params.plant_id}`)
})

//Update in CRUD
router.put('/',(req,res)=>{
    req.body.status = 'UPDATED';
    res.send(req.body);
})

//Delete in CRUD
router.delete('/',(req,res)=>{
    req.body.status = 'DELETED';
    res.send(req.body);
})

module.exports = router;