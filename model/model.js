'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let todoSchema = new Schema({
    username: string,
    todo: string,
    isDone: Boolean,
    hasAttachment: Boolean
});

let todos = mongoose.model('todos', todoSchema);

module.exports = todos;