const fs = require('fs');
const colors = require('colors');

let todoList = [];

const saveDB = () => {
  let data = JSON.stringify(todoList);
  fs.writeFile('db/data.json', data, (err)=>{
    if(err) throw new Error('Can not save data', err);
  })
};

const loadDB = () => {
  try{
    todoList = require('../db/data.json');
  }catch (e) {
    todoList = [];
  }
};

const getList = () => {
  loadDB();
  for(let note of todoList) {
    console.log('======================TODO====================='.green);
    console.log(note.description);
    console.log('Status: ' + note.completed);
    console.log('==============================================='.green);
  }
};

const update = (description, completed = true) => {
  loadDB();
  let index = todoList.findIndex(item => item.description === description);
  if(index >= 0) {
    todoList[index].completed = completed;
    saveDB();
    return true;
  }
  return false;
};

const create = (description) => {
  loadDB();

  let todo = {
    description,
    completed: false
  };

  todoList.push(todo);

  saveDB();

  return todo;
};

const deleteNote = (description) => {
  loadDB();
  let nuevoListado = todoList.filter(item => item.description !== description);

  if(nuevoListado.length === todoList.length) {
    return false;
  }
  todoList = nuevoListado;
  saveDB();
  return true;
};

module.exports = {
  create,
  getList,
  update,
  deleteNote
};