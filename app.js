const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');


let command = argv._[0];

switch (command) {
  case 'create':
    let note = todo.create(argv.description);
    console.log(note);
    break;
  case 'list':
    todo.getList();
    break;
  case 'update':
    let updated = todo.update(argv.description, argv.completed);
    console.log(updated);
    break;
  case 'delete':
    let deleted = todo.deleteNote(argv.description);
    console.log(deleted);
    break;

  default:
    console.log('Command not found');
    break;
}