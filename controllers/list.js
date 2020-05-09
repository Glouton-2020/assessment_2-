const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.js');


// Index
router.get('/', (req, res) => {
    Todo.find({}, (error, allToDo) => {
        res.render('Index', { 
            todo: allToDo
        });
    });
});

// Create
router.post('/', (req, res) => {
    ToDo.create (req.body, (err, createdToDo) => {
            res.redirect('/todolist');
        });
    });


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    ToDo.findByIdAndRemove(req.params.id, () => {
        res.redirect('/todolist');
    });
});


// export router
module.exports = router;