'use strict';

let Todos = require('../model/model');

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) => {

        // Seed database
        let starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk, bread, and eggs',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Wash clothes',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Build API',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, (err, results) => {
            res.send(results);
        });
    });
}