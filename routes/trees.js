// //routes for trees

// //Create a router
// let express = require('express');
// let router = express.Router();

// //Read Trees in CRUD
// router.get('/successMessage/:id',(req,res)=>{
//     res.send(`${req.params.id} tree has been accessed via get request`)
// });

// //Create Trees in CRUD
// router.post('/successMessage/:id',(req,res)=>{
//     res.send(`${req.params.id} tree has been accessed via post request`)
// });

// //Make these paths accessible
// module.exports = router;

//********************************************************************* */

//Create route using express.Router
let express = require('express');
let router = express.Router();

//Create in CRUD
router.post('/',(req,res)=>{
    req.body.status = 'CREATED';
    res.send(req.body);
})

//Read in CRUD
router.get('/:tree_id',(req,res)=>{
    res.send(`The tree id is ${req.params.tree_id}`);
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

//export router 
module.exports = router;