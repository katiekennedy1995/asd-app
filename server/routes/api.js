const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://nikhil:1234@ds053300.mlab.com:53300/meantodos',['todos']);
/* GET api listing. */

router.get('/', (req, res) => {
  res.send('api works');
});


// Get Todos
router.get('/todos', function(req, res, next){
    db.todos.find(function(err, todos){
        if(err){
           res.send(err);
        } else {
           res.json(todos);
        }
    });
});

module.exports = router;
