const description = {
  demand: true,
  alias: 'd',
  desc: 'Description of the note to do'
};

const completed = {
  default: true,
  alias: 'c',
  desc: 'Set as completed or pending the note'
};

const argv = require('yargs')
  .command('list','list notes',{})
  .command('create','create notes',{description})
  .command('update','update notes',{description,completed})
  .command('delete','dete a note',{description})
  .help()
  .argv;

module.exports = {
  argv
};