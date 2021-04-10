//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Our readme info
const writeFile = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
      {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Instructions to be followed?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Do you have any credits?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What licensing am I using?',
      choices: ['MIT','Apache', 'ISC']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address',
    },
]);
};
//Writing a FileAsync as a promise
const init = () => {
    promptUser()
      .then((answers) => writeFile('README.md', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  // Initialize
  init();